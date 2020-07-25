global="I'm a global variable"

test() {
	echo "Inside test method"
	echo "global => $global"
	local local_var="I'm a local variable"
	echo "local => $local_var"
}

test

echo "Outside on the global scope"

echo "global => $global"
echo "local => $local_var"
