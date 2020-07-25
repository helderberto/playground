check_status() {
	local status=$(curl -ILs $1 | head -n 1 | cut -d ' ' -f 2)
	if [[ $status -lt 200 ]] || [[ $status -gt 299 ]]; then
		echo "$1 failed with a $status"
	else
		echo "$1 succeded with a $status"
	fi
}

check_status https://helderburato.com
check_status https://helder.dev
