//Given an array of integers, returns phonetic equaivalent of the integers
function arrayIntToString(arr) {
    let phonetic = ""
    for (var i = 0; i < arr.length; i++) {
        let number = arr[i]
        let number_as_str = convertToString(number)
        if (i == arr.length - 1) {
            phonetic += number_as_str
        } else {
            phonetic += number_as_str + ","
        }
    }
    return phonetic

}


//Converts an integer to phonetic equaivalent as a string and returns that string. Ex: 45 -> FourFive
function convertToString(number) {
    let number_str = number.toString()
    let number_split = number_str.split("")
    let int_to_str = new Map()
    let conversion = ""

    int_to_str["0"] = "Zero"
    int_to_str["1"] = "One"
    int_to_str["2"] = "Two"
    int_to_str["3"] = "Three"
    int_to_str["4"] = "Four"
    int_to_str["5"] = "Five"
    int_to_str["6"] = "Six"
    int_to_str["7"] = "Seven"
    int_to_str["8"] = "Eight"
    int_to_str["9"] = "Nine"

    for (var i = 0; i < number_split.length; i++) {
        conversion += int_to_str[number_split[i]]
    }
    return conversion
}