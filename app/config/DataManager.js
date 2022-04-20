export default class DataManager {
    static myInstance = null;
    userID = "";

    memories = [
        {
            userid: "1",
            memoryid: 1,
            title: "Family",
            subtitle: "date",
            category: "L1"
        },
        {
            userid: "1",
            memoryid: 2,
            title: "Friends",
            subtitle: "date",
            category: "L2"
        },
        {
            userid: "2",
            memoryid: 1,
            title: "Family",
            subtitle: "date",
            category: "L1"
        }
    ]

    static getInstance() {
        if (DataManager.myInstance == null) {
            DataManager.myInstance = new DataManager();
        }
        return this.myInstance;
    }

    getUserID() {
        return this.userID;
    }

    setUserID(id) {
        this.userID = id;
    }

    getMemories(id) {
        // error checking for null
        return this.memories.filter((memory) => memory.userid === id);
    }

    addMemory(memory) {
        this.memories.push(memory);
    }
}