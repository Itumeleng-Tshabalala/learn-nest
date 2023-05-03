import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { EntityRepository } from "src/repository/entity.repository";
import { UserDocument, User } from "../schemas/user.schema";

@Injectable()
export class UsersRepository extends EntityRepository<UserDocument> {
    constructor(@InjectModel(User.name) userModel: Model<UserDocument>) {
      super(userModel)
    }
}