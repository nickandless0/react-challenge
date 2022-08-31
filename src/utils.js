
class Utils {

    static sortListBySize = (list, field) => {
        let updated = list;

        updated.sort(function (a, b) {
            if (b[field] === Infinity)
                return 1;
            else if (isNaN(b[field]))
                return -1;
            else
                return b[field] - a[field];
        });

        return updated;
    }

}

export default Utils;