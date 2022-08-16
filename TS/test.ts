const func = () => {
    return 888
}
type _res = ReturnType<typeof func>
const res: _res = 888