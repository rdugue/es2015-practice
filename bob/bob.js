/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Bob {
  hey(message) {
    const responses = [
      'Whatever.',
      'Whoa, chill out!',
      'Sure.',
      'Fine. Be that way!'
    ]

    if (message.trim() === '') {
      return responses[3]
    } else if (this.isQuestion(message)) {
        return responses[2]
    } else if (this.isShouting(message)) {
        return responses[1]
    } else {
      return responses[0]
    }
  }

  isShouting(message) {
    const re = /['\.\?\-&;",\d\!@#$%\*()\^\+\!]/g
    let sanitized = message.replace(re, '').trim()

    if (sanitized === '') {
      return false
    }

    for (const c of sanitized) {
      if (c !== c.toUpperCase() ) {
        return false
      } 
    }
    
    return true
  }

  isQuestion(message) {
    return this.isShouting(message) || message.charAt(message.length-1) !== '?' ? false : true
  }
}

export default Bob;

