export default class Transcriptor {
    toRna(dna) {
        let transcript = {
            'C': 'G',
            'G': 'C',
            'A': 'U',
            'T': 'A'
        }
        let rna = ''

        for (const c of dna) {
            if (Object.keys(transcript).includes(c)) {
                rna = rna + transcript[c]
            } else {
                throw new Error('Invalid input DNA.') 
            }
        }

        return rna
    }
}