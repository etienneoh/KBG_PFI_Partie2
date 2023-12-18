import PhotoLikeModel from '../models/photoLike.js';
import Repository from '../models/repository.js';
import Controller from './Controller.js';
import Authorizations from '../authorizations.js';
import RepoCacheManager from '../models/repositoryCachesManager.js'

export default class PhotoLikesController extends Controller {
    constructor(HttpContext) {
        super(HttpContext, new Repository(new PhotoLikeModel()), Authorizations.user());
    }
}