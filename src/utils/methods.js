export function removeItemFrom(list, item) {
    const index = list.findIndex((el) => el.id === item.id);

    return [
        ...list.slice(0, index),
        ...list.slice(index + 1)
    ];
}

export function getFormattedDate(date = new Date()) {
    return new Date(date).toISOString().slice(0, 10);
}

export function getFloatingPointAmount(amount) {
    return Number(amount).toFixed(2);
}

export function getCountOfItemsWithId(items, id) {
    let count = 0;

    for (const item of items) {
        if (item.id === id) count++;
    }

    return count;
}