import { Table, Form, Button, notification, Input } from "antd";
import { useMutation, gql } from "@apollo/client";
import { useCallback, useState } from "react";
import Modal from "antd/lib/modal/Modal";
import { UniversalEditor } from "../../../components/univiesal-editor";

const ADD_NEWS = gql`
    mutation AddNews($title: String, $content: String, $author: String) {
        news {
            addNews(title: $title, content: $content, author: $author)
        }
    }
`;

export const News = React.memo(() => {
    const [visible, setVisible] = useState<boolean>(false);
    const columns = [
        {
            title: "Title",
            dataIndex: "title",
        },
        {
            title: "Content",
            dataIndex: "content",
        },
        {
            title: "Author",
            dataIndex: "author",
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
            >
                <Input placeholder="title" style={{ marginBottom: "20px" }} />
                <UniversalEditor />
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
            <Table columns={columns} />
        </>
    );
});

function useAddNewsMutation() {
    const [mutation] = useMutation(ADD_NEWS, {
        onCompleted: () => {
            notification.success({ message: "Новость добавлена" });
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
