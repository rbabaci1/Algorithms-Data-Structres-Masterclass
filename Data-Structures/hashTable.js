class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size);
    }

    hash(key) {
        let total = 0, WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let val = key.charCodeAt(i) - 96;
            total =  (total * WEIRD_PRIME + val) % this.keyMap.length;
        }
        return total;
    }

    set(key, val) {
        let hashIdx = this.hash(key);

        if (!this.keyMap[hashIdx]) {
            this.keyMap[hashIdx] = [];
        }
        this.keyMap[hashIdx].push([key, val])
    }   

    get(key) {
        let hashIdx = this.hash(key);
        let slot = this.keyMap[hashIdx];

        if (slot) {
            for (let i = 0; i < slot.length; i++) {
                if (slot[i][0] === key) return slot[i][1];
            }
        }

        return undefined;
    }

    keys() {
        let keys = [];

        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let k = 0; k < this.keyMap[i].length; k++) {
                    if (!keys.includes(this.keyMap[i][k][0])) {
                        keys.push(this.keyMap[i][k][0]);
                    }
                }
            }
        }
        
        return keys;
    }

    values() {
        let values = [];

        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let k = 0; k < this.keyMap[i].length; k++) {
                    if (!values.includes(this.keyMap[i][k][1])) {
                        values.push(this.keyMap[i][k][1]);
                    }
                }
            }
        }
        
        return values;
    }
}

const hashTable = new HashTable(10);

hashTable.set("rabah", 26)
hashTable.set("habar", 27)
hashTable.set("kyla", 23)
hashTable.set("nance", 23)

// console.log(hashTable.keyMap)

console.log(hashTable.get("kyla"))
console.log(hashTable.keys())
console.log(hashTable.values())