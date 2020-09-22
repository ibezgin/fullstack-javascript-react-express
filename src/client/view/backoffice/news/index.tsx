import { Table, Form, Button, notification, Input } from "antd";
import { useMutation, gql, useQuery } from "@apollo/client";
import { useCallback, useState } from "react";
import Modal from "antd/lib/modal/Modal";
import { UniversalEditor } from "../../../components/univiesal-editor";
import { useMemo } from "react";
import { editorHtmlCleaner } from "../../../service/utils/editor-html-cleaner";
import { EditOutlined } from "@ant-design/icons";

const ADD_NEWS = gql`
    mutation AddNews($title: String, $content: String) {
        news {
            addNews(title: $title, content: $content)
        }
    }
`;

const GET_NEWS = gql`
    query allNews {
        news {
            allNews {
                _id
                title
                content
            }
        }
    }
`;

export const News = React.memo(() => {
    const [visible, setVisible] = useState<boolean>(false);
    const [content, setContent] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [edit, setEdit] = useState<boolean>(false);

    const allNewsQuery = useQuery(GET_NEWS, {
        ssr: false,
    });

    const memoizedAllNews = useMemo(
        () => allNewsQuery?.data?.news?.allNews || [],
        [allNewsQuery?.data?.news?.allNews],
    );

    const addNewsMutation = useAddNewsMutation(
        allNewsQuery.refetch,
        setVisible,
    );

    const columns = [
        {
            title: "id",
            dataIndex: "_id",
        },
        {
            title: "Title",
            dataIndex: "title",
        },
        {
            title: "Content",
            dataIndex: "content",
        },

        {
            title: "edit",
            dataIndex: "edit",
            render: (e: any, original: any) => (
                <EditOutlined
                    onClick={() => {
                        setEdit(true);
                    }}
                />
            ),
        },
        {
            title: "remove",
            dataIndex: "remove",
        },
    ];
    return (
        <>
            <Modal
                visible={visible}
                onCancel={() => {
                    setVisible(false);
                }}
                width={"1wh"}
                style={{ margin: "60px" }}
                title={edit ? "Редактировать" : "Добавить"}
                onOk={() => {
                    addNewsMutation(title, editorHtmlCleaner(content));
                }}
            >
                <Form layout="vertical">
                    <Form.Item label="Title:">
                        <Input
                            placeholder="title"
                            value={title}
                            onChange={event => {
                                setTitle(event.target.value);
                            }}
                        />
                    </Form.Item>
                    <UniversalEditor getContent={setContent} />
                </Form>
            </Modal>
            <Form.Item labelAlign={"right"} style={{ float: "right" }}>
                <Button
                    onClick={() => {
                        setVisible(true);
                    }}
                    type="primary"
                >
                    ADD NEWS
                </Button>
            </Form.Item>
            <Table columns={columns} dataSource={memoizedAllNews || []} />
        </>
    );
});

function useAddNewsMutation(
    refetch: () => void,
    setVisible: (value: boolean) => void,
) {
    const [mutation] = useMutation(ADD_NEWS, {
        onCompleted: () => {
            notification.success({ message: "Новость добавлена" });
            refetch();
            setVisible(false);
        },
        onError: () => {
            notification.error({ message: "Произошла ошибка" });
        },
    });

    return useCallback(
        (title: string, content: string) => {
            mutation({
                variables: {
                    title,
                    content,
                },
            });
        },
        [mutation],
    );
}
