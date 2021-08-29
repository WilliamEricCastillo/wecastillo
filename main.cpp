/*********************
Name: William Castillo
Coding 01
Purpose: This program is a command line analyzer that displays the number of command line parameters,
the string length of the program's name, and the string length of each parameter.
**********************/

#include "main.h"

int main(int argc, char** argv) {
    cout << "My Command line analyzer..." << endl;
    cout << "The number of command line parameters are: " << argc << endl;
    cout << "The length of the name of the program is: " << string_length(argv[0]) << endl;

        for(int i = 1; i < argc; ++i){

            cout << "The length of the parameter " << i << " is " << string_length(argv[i]) << endl;
        }

    return 0;
}


