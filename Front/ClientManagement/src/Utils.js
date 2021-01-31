export class Utils {
    static getSummaryFromClientDetails = (item) => {
        console.log({
            Id: item.Id,
            Document: item.Document,
            FullName: item.FullName,
        })
        return {
            Id: item.Id,
            Document: item.Document,
            FullName: item.FullName,
        };
    }

    static objectClone = (object) => {
        return JSON.parse(JSON.stringify(object));
    }
}