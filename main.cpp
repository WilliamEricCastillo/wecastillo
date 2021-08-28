/*********************
Name: William Castillo
COSC-2436-003
Purpose: Demonstrate local and remote repository skills
**********************/

#include "main.h"


int main(int argc, char** argv) {
    cout << "My Command line analyzer..." << endl;
    cout<< "The number of command line parameters are: "<< argc << endl;

    if(argc >1)
    {
        cout<< "The length of the first of the first parameter is: " << string_length(argv[1]) << endl;
    }

    return 0;
}


