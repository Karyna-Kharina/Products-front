export function removeItemFrom(list, item) {

    const index = list.findIndex((el) => el.id === item.id);

    return [
        ...list.slice(0, index),
        ...list.slice(index + 1)
    ];
}

export function saveItemTo(list, item) {

    const index = list.findIndex((el) => el.id === item.id);

    let newList = [];

    if (index === -1) {
        newList = [...list, item];
    } else {
        newList = [
            ...list.slice(0, index),
            item,
            ...list.slice(index + 1)
        ];
    }

    return newList;
}