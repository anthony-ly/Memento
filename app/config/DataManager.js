export default class DataManager {
    static myInstance = null;
    userID = "";

    /**
     * Array containing the initial memories made by the initial users
     */
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

    /**
     * Array containing the data of the initial users
     */
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

    /**
     * Array containing the category data
     */
    categories = [
        { label: "Family", value: 1, icon: "heart", backgroundColor: "black" },
        { label: "Friends", value: 2, icon: "account-group", backgroundColor: "black" },
        { label: "Nature", value: 3, icon: "tree", backgroundColor: "black" },
    ];

    /**
     * 
     * @returns the instance of the DataManager, if one does not exist, it makes a new DataManager object
     */
    static getInstance() {
        if (DataManager.myInstance == null) {
            DataManager.myInstance = new DataManager();
        }
        return this.myInstance;
    }

    /**
     * 
     * @returns category data
     */
    getCategories() {
        return this.categories;
    }

    /**
     * 
     * @returns user data
     */
    getUsers() {
        return this.users;
    }

    /**
     * 
     * @returns the userid of the current user who is logged into the app
     */
    getUserID() {
        return this.userID;
    }

    /**
     * 
     * @param id - the id of the user who has logged int
     * 
     * assigns the value of id to userID
     */
    setUserID(id) {
        this.userID = id;
    }

    /**
     * 
     * @param user  - new user object
     * 
     * adds a new user object to the users array
     */
    addUser(user) {
        this.users.push(user);
    }

    /**
     * 
     * @param id - user id
     * 
     * @returns gets the memories for the corresponding user
     */
    getMemories(id) {
        // error checking for null
        return this.memories.filter((memory) => memory.userid === id);
    }

    /**
     * 
     * @returns memories data
     */
    getAllMemories() {
        return this.memories;
    }

    /**
     * 
     * @param id - memory id 
     * 
     * @returns the corresponding memory in memories that matches the param id
     */
    getMemory(id) {
        return this.memories.filter((memory) => memory.memoryid === id);
    }

    filterMemory(category, id) {
        let filter = this.memories.filter((memory) => memory.category === category);
        return filter.filter((memory) => memory.userid === this.userID);
    }

    addMemory(memory) {
        this.memories.push(memory);
    }

    /**
     * 
     * @param {*} id - memory id
     * @param {*} title - new memory title
     * @param {*} subtitle - new memory subtitle
     * @param {*} category - new memory category
     */
    updateMemory(id, title, subtitle, category) {
        /**
         * 1. pass the new values to the function (some of these might be null/empty)
         * 2. check if they are empty, or in the case of category, if they are the same
         * 3. for the different ones/nonempty ones update their values according to the memory id
         */

        let memoryIndex = this.memories.findIndex((memory => memory.memoryid == id));

        if (title !== '') {
            this.memories[memoryIndex].title = title;
        }
        if (subtitle !== '') {
            this.memories[memoryIndex].subtitle = subtitle;
        }
        if (typeof category !== 'undefined' && this.memories[memoryIndex].category !== category.label) {
            this.memories[memoryIndex].category = category.label;
        }

    }

    /**
     * 
     * @param {*} newMemoryList - filtered memory list that does not contain a removed memory
     * assigns value of newMemory list to memories
     */
    removeMemory(newMemoryList) {
        this.memories = newMemoryList;
    }
}