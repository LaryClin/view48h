export const formatAddress = (address) => {
    return address.substring(0, 5) + '...' + address.slice(-3);
};