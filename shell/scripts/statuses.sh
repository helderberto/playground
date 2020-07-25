ok() {
	return 0
}

fail() {
	return 1
}

fail
echo $?
ok
echo $?
