export function removeItemFrom(list, item) {
    const index = list.findIndex((el) => el.id === item.id);

    return [
        ...list.slice(0, index),
        ...list.slice(index + 1)
    ];
}