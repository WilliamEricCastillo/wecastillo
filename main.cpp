/*********************
Name: William Castillo
COSC-2436-003
Purpose: This program is a command line analyzer that displays the number of command line parameters,
the string length of the program's name, and the string length of each parameter.
**********************/

#include "main.h"

int main(int argc, char** argv) {
    cout << "My Command line analyzer..." << endl;
    cout<< "The number of command line parameters are: "<< argc << endl;

    if(argc >1)
    {
        cout<< "The length of the name of program is: " << string_length(argv[1])<< endl;
        cout<< "The length of the first parameter is: " << string_length(argv[1]) << endl;
    }

    return 0;
}


