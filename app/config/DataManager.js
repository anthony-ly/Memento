export default class DataManager {
    static myInstance = null;
    userID = "";

    memories = [
        {
            userid: "1",
            memoryid: 1,
            title: "Family",
            subtitle: "date",
            image: require("../assets/Book1Cover.jpg"),
            category: "L1"
        },
        {
            userid: "1",
            memoryid: 2,
            title: "Friends",
            subtitle: "date",
            image: require("../assets/Book1Cover.jpg"),
            category: "L2"
        },
        {
            userid: "1",
            memoryid: 3,
            title: "yeet",
            subtitle: "date",
            image: require("../assets/Book1Cover.jpg"),
            category: "L2"
        },
        {
            userid: "2",
            memoryid: 4,
            title: "Family",
            subtitle: "date",
            image: require("../assets/Book1Cover.jpg"),
            category: "L1"
        }
    ];

    users = [
        {
            id: "1",
            fullname: "tester1",
            email: "test1@mail.com",
            password: "1234"
        },
        {
            id: "2",
            fullname: "tester2",
            email: "test2@mail.com",
            password: "5678"
        },
    ];

    categories = [
        { label: "L1", value: 1, icon: "airplane-takeoff", backgroundColor: "red" },
        { label: "L2", value: 2, icon: "ghost", backgroundColor: "blue" },
        { label: "L3", value: 3, icon: "flash", backgroundColor: "green" },
    ];

    static getInstance() {
        if (DataManager.myInstance == null) {
            DataManager.myInstance = new DataManager();
        }
        return this.myInstance;
    }

    getCategories() {
        return this.categories;
    }

    getUsers() {
        // console.log("DM[getUser]", this.users);
        return this.users;
    }

    getUserID() {
        return this.userID;
    }

    setUserID(id) {
        this.userID = id;
    }

    addUser(user) {
        // console.log("DM[addUser]", user)
        this.users.push(user);
    }

    getMemories(id) {
        // error checking for null
        return this.memories.filter((memory) => memory.userid === id);
    }

    getAllMemories() {
        return this.memories;
    }

    getMemory(id) {
        return this.memories.filter((memory) => memory.memoryid == id);
    }

    addMemory(memory) {
        this.memories.push(memory);
    }

    updateMemory(id, title, subtitle, category) {
        /**
         * 1. pass the new values to the function (some of these might be null/empty)
         * 2. check if they are empty, or in the case of category, if they are the same
         * 3. for the different ones/nonempty ones update their values according to the memory id
         */
        // console.log("before:", this.memories);
        // console.log("\n");

        let memoryIndex = this.memories.findIndex((memory => memory.memoryid == id));

        // console.log("updating this:", this.memories[memoryIndex]);

        if (title !== '') {
            // console.log("different title\n")
            this.memories[memoryIndex].title = title;
        }
        if (subtitle !== '') {
            // console.log("different subtitle\n")
            this.memories[memoryIndex].subtitle = subtitle;
        }
        if (typeof category !== 'undefined' && this.memories[memoryIndex].category !== category.label) {
            // console.log("different category\n")
            this.memories[memoryIndex].category = category.label;
        }

        // console.log("after:", this.memories);
    }

    removeMemory(memory) {
        /**
         * Search memories to find the corresponding memory that has the memoryid as the parameter id
         * once that has been found, just remove it
         */
        this.memories = this.memories.filter((item) => item.memoryid !== memory.memoryid);
        console.log("removemems:", memories, "\n\n\n");
        // return this.memories.filter((stuff) => stuff.memoryid !== memory.memoryid);

    }
}