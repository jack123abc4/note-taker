// You will need to lookup and use this package for the Unique IDs. uuid npm, check 03-resouces in Slack (make sure you require it) (utils, fs, and uuid)
// create variables for readFileAsync and writeFileAsync
// const readFileAsync = (something with util)
// writeFileAsync = (something with util)

// We need a class of store

class Store {
    // read()
    read() {
        return readFileAsync('db/db.json', 'utf8');
    }

    // write()
    // return db/db.json JSON.stringify(note)

    // getNotes()
    // return read().then(notes) parse notes concat(JSON.parse(notes))

    // addNotes()
    // you need to save title, text = note const {title, text} = note
    // if (!title || !text) throw error (throw!! not return)
    // add UNIQUE id to note using our package
    // create new variable to hold our new note w/ new given id
    // const userNote = {title, text, id: (needs to be equal to something)}

    // grab all notes and new note and update notes to return the new note [...notes, userNote]



    // deleteNotes()
    // use the given id to remove/delete the note

}

// export module here