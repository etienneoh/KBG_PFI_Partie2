import Model from './model.js';
import UserModel from './user.js';
import Repository from '../models/repository.js';
import PhotoModel from './photo.js';

export default class PhotoLike extends Model {
    constructor()
    {
        super();
        this.addField('OwnerId', 'string');
        this.addField('ImageId', 'string');

        this.setKey("OwnerId");
    }

    bindExtraData(instance) {
        instance = super.bindExtraData(instance);
        let usersRepository = new Repository(new UserModel());
        let photosRepository = new Repository(new PhotoModel());
        instance.Owner = usersRepository.get(instance.OwnerId);
        instance.OwnerName = instance.Owner.Name;
        return instance;
    }
}