
export const zipCodeChecker = (e) => {
    if (e.target.value.length === 5 || e.target.value.length === 0) {
        return true;
    }
    return false;
}
