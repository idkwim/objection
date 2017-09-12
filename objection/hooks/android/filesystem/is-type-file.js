// Check if the path is a file.
var File = Java.use('java.io.File');
var file = File.$new('{{ path }}');

// prep the response array with some default values. we assume
// failure.
var response = {
    status: 'success',
    error_reason: NaN,
    type: 'is-type-file',
    data: Boolean(file.isFile())
};

send(JSON.stringify(response));

// -- Sample Java Code
//
// File d = new File(".");
// d.isFile();
