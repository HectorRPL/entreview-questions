
JavaScript: Student Record Manipulation

Description

In this challenge, the task is to implement a function manipulateStudentRecord that:
- takes 4 arguments: an object literal obj, a string operation that is either "delete" or "edit", a string prop, and a string newValue.

- returns a value depending on operation:
	• If operation is 'delete', then it returns a new object literal with the same properties and their values as obj has, except that if obj has property prop, then this property must not be in the returned object literal. In this case, the parameter newValue would be undefined.
	• If operation is 'edit', then it returns a new object literal with the same properties and their values
	as obj has, except that if obj has property prop, then this property value must be updated to the newValue
	parameter.
	
Your implementation of the function will be tested by a provided code stub on several input files. Each input file contains parameters for the function call. The function will be called with those parameters, and the result of its execution will be printed to the standard output by the provided code. The provided code prints the properties of the returned object ordered by their names.

▼ Input Format For Custom Testing
The first line contains an integer, n, denoting the number of
properties obj has.
Each line / of the n subsequent lines (where 0 <i<n ... habian mas cosas, pero se perdio en la imagen




Test case must be:

Input (stdin)
	1 3
	2 name John
	2 lastName Bliss
	4  city Florida

Your Output (stdout)
	1 city Florida
	2 LastName Bliss
	3 name John

Expected Output
	1 lastName Bliss
	2 name John
