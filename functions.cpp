/*********************
Name: William Castillo
COSC-2436-003
Purpose: This program is a command line analyzer that displays the number of command line parameters,
the string length of the program's name, and the string length of each parameter.
**********************/

#include "functions.h"

int string_length(const char *str){

    int count = 0;

    for( int i = 0; i < str[i]; ++i)
    {
        count += 1;
    }

    return count;
}