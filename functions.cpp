/*********************
Name: William Castillo
Coding 01
Purpose: This program is a command line analyzer that displays the number of command line parameters,
the string length of the program's name, and the string length of each parameter.
**********************/

#include "functions.h"

int string_length(const char *str){

    int i = 0;

    while(str[i] != '\0')
    {
        i++;
    }
    return i;
}