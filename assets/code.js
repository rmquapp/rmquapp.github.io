function getStats(txt) {
    var words = getWords(txt);

    return {
        nChars: txt.length,
        nWords: words.length,
        nLines: nLines(txt),
        nNonEmptyLines: nNonEmptyLines(txt),
        averageWordLength: averageWordLength(words),
        maxLineLength: maxLineLength(txt),
        palindromes: palindromes(words),
        longestWords: longestWords(words),
        mostFrequentWords: mostFrequentWords(words)
    };
}

function getWords(txt) {
    var words = [];
    var text = txt.split(/[^A-Za-z0-9]/);
    for (var i = 0; i < text.length; i++) {
        if (text[i]) {
            words.push(text[i]);
        }
    }
    return words;
}

function nLines(txt) {
    if (txt) {
        var lines = txt.split(/[\n\r]/g);
        return lines.length;
    }
    return 0;
}

function nNonEmptyLines(txt) {
    if (txt) {
        var lines = txt.split(/[\n\r]/g);
        var count = 0;
        for (var i = 0; i < lines.length; i++) {
            if (lines[i].trim()) {
                count++;
            }
        }        
        return count;
    }
    return 0;
}

function averageWordLength(words) {
    if (words.length > 0) {
        var sum = 0;
        for (var i = 0; i < words.length; i++) {
            sum = sum + words[i].length;
        }
        return sum/words.length;
    }
    return 0;
}

function unique(value, index, self) { 
    return self.indexOf(value) === index;
}

function palindromes(words) {
    var palindromes = [];
    for (var i = 0; i < words.length; i++) {
        var word = words[i].toLowerCase();
        if (word == word.split('').reverse().join('')) {
            if (word.length > 2) {
                palindromes.push(word);
            }
        }
    }
    return palindromes.filter(unique);
}

function maxLineLength(txt) {
    var lines = txt.split(/[\n\r]/g);
    var max = 0;
    for (var i = 0; i < lines.length; i++) {
        var length = lines[i].length;
        if (length > max) {
            max = length;
        }
    }
    return max;
}

function lower(words) {
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].toLowerCase();
    }
    return words;   
}

function longestWords(words) {
    words = lower(words);

    var sorted = words.sort(function(a, b) {
        diff = b.length - a.length;
        if (diff == 0) {
            if (a > b) {
                return 1;
            }
            return -1;
        }
        return diff;
    });
    return sorted.slice(0, 10);
}

function mostFrequentWords(words) {
    words = lower(words);

    var freq = {};
    for (var i = 0; i< words.length; i++) {
        var word = words[i];
        freq[word] = freq[word] ? freq[word]+1 : 1;
    }

    var sorted = words.filter(unique).sort(function(a, b) {
        if (freq[a] < freq[b]) {
            return 1;
        }
        else if (freq[a] == freq[b]) {
            if (a > b) {
                return 1;
            }
        }
        return -1;      
    });

    var arr = sorted.slice(0, 10);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] + "(" + freq[arr[i]] + ")";
    }
    return arr;
}