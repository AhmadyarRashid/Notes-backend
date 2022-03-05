import { getRepository } from "typeorm";
import { User } from "execfn-core/lib/data/entities/identityAndAccountManagement/user";


export class SystemService {

    randomBusinessLogic() {
        return true
    }

    anotherRandomBusinessLogic(){
        throw new Error('Things That Can Go Wrong, Go Wrong')
    }

    async createUser(){
        const userRepository = getRepository(User);
        return await userRepository.save({
            firstName: "Ankur",
            lastName: "Bhai",
            isActive: true,
        });
    }

    async getUserCount(){
        const userRepository = getRepository(User);
        return await userRepository.find();
    }
}
