export class Utils {
    static getSummaryFromClientDetails = (item) => {
        console.log({
            id: item.id,
            document: item.document,
            fullName: item.fullName,
        })
        return {
            id: item.id,
            document: item.document,
            fullName: item.fullName,
        };
    }

    static objectClone = (object) => {
        return JSON.parse(JSON.stringify(object));
    }
}