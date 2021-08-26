/*********************
* Your comment header here.
**********************/

#include "main.h"


int main(int argc, char** argv) {
    cout << "My Command line analyzer..." << endl;
    cout<< "The number of command line parameters are: "<< argc << endl;

    if(argc > 1){
        std::cout << "The length of the first parameter is "<< string_length(argv[1]) << std::endl;
    }
    return 0;
}
