export default class DataManager {
    static myInstance = null;
    userID = "";

    memories = [
        {
            userid: "1",
            memoryid: 1,
            title: "Family",
            subtitle: "Long time no see.",
            image: require("../assets/family.jpg"),
            category: "Family"
        },
        {
            userid: "1",
            memoryid: 2,
            title: "Friends",
            subtitle: "Fun at the park.",
            image: require("../assets/park.jpg"),
            category: "Friends"
        },
        {
            userid: "2",
            memoryid: 3,
            title: "Friends",
            subtitle: "With my favourite people.",
            image: require("../assets/park.jpg"),
            category: "Family"
        }
    ];

    users = [
        {
            id: "1",
            fullname: "John Smith",
            email: "js@mail.com",
            password: "1234"
        },
        {
            id: "2",
            fullname: "Blake Reeves",
            email: "br@mail.com",
            password: "5678"
        },
    ];

    categories = [
        { label: "Family", value: 1, icon: "heart", backgroundColor: "black" },
        { label: "Friends", value: 2, icon: "account-group", backgroundColor: "black" },
        { label: "Nature", value: 3, icon: "tree", backgroundColor: "black" },
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

    // gets the memories for the corresponding user
    getMemories(id) {
        // error checking for null
        return this.memories.filter((memory) => memory.userid === id);
    }

    getAllMemories() {
        return this.memories;
    }

    getMemory(id) {
        return this.memories.filter((memory) => memory.memoryid === id);
    }

    filterMemory(category, id) {
        let filter = this.memories.filter((memory) => memory.category === category);
        return filter.filter((memory) => memory.userid === this.userID);

        // return this.memories.filter((memory) => memory.category === category);
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

    removeMemory(newMemoryList) {
        this.memories = newMemoryList;
    }
}