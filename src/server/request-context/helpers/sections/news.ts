import { getMongoManager } from "typeorm";
import { AbstractRequestContextHelper } from "../../abstract-request-context-helper";
import { NewsEntity } from "../../../db/entities/news";

export class NewsContextHelper extends AbstractRequestContextHelper {
    public async getAll() {
        const manager = getMongoManager();
        const result = await manager.find(NewsEntity);
        return result;
    }

    public async addNews(title: string, content: string) {
        const news = new NewsEntity();
        news.content = content;
        news.title = title;
        const manager = getMongoManager();
        manager.save(news);
        return true;
    }
}
