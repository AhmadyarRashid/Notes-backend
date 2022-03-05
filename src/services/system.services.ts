import {getRepository} from "typeorm";
import {User} from "execfn-core/lib/data/entities/identityAndAccountManagement/user";


export class SystemService {

    randomBusinessLogic() {
        return true
    }

    anotherRandomBusinessLogic(){
        throw new Error('Things That Can Go Wrong, Go Wrong')
    }

    createUser(){
        const userRepository = getRepository(User);
        userRepository.create({
            firstName: "Ahmad",
            lastName: "Bhai",
            isActive: true,
        })
    }

    async getUserCount(){
        const userRepository = getRepository(User);
        return userRepository.count();
    }
}