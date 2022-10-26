function validate() {
    let fullName = document.getElementById('full-name').value 
    let gender = document.getElementById('gender').value 
    let hobbies_arr = []
    let error = false

    // full name verification
    if(fullName.length < 5 || !fullName.includes(' ')) {
        document.getElementById('full-name-invalid').style.display = 'block'
        error = true
    }
    else {
        document.getElementById('full-name-invalid').style.display = 'none'
    }

    // gender validation
    if(!gender) {
        document.getElementById('gender-invalid').style.display = 'block'
        error = true
    }
    else {
        document.getElementById('gender-invalid').style.display = 'none'
    }

    // Hobby verification
    let count = 0
    if(document.getElementById('singing').checked) {
        hobbies_arr.push('singing')
        count++
    }

    if(document.getElementById('dancing').checked) {
        hobbies_arr.push('dancing')
        count++
    }

    if(document.getElementById('reading').checked) {
        hobbies_arr.push('reading')
        count++
    }

    if(count === 0) {
        document.getElementById('hobby-invalid').style.display = 'block'
        error = true
    }
    else {
        document.getElementById('hobby-invalid').style.display = 'none'
    }

    let hobbies_str = hobbies_arr[0]
    let i
    for(i=1; i< hobbies_arr.length-1 ; i++) {
        hobbies_str += ', '
        hobbies_str += hobbies_arr[i]
    }
    if(i< hobbies_arr.length) {
        hobbies_str += ' and ' + hobbies_arr[i]
    }
    if(!error) {
        window.alert(`Hobbies of ${fullName} (${gender.toUpperCase()}) are ${hobbies_str}`)
        document.getElementById('registration-form').reset()
    }

}