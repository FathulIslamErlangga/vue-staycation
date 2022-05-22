export default (number) => {
    const formats = new Intl.NumberFormat("id-ID")
    return formats.format(number)
}