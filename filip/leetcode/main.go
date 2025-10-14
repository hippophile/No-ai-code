package main

func main () {

	strs := []string{"flower", "flow"}
	strs2 := []string{"dog","racecar","car"}
	println(longestCommonPrefix(strs))
	println(longestCommonPrefix(strs2))
}

func longestCommonPrefix(strs []string) string {
	
	if len(strs) == 0{
		return ""
	}

	base := strs[0]
	for i:=0; i<len(base); i++ {
		for _, word := range strs[1:] {
			if (i==len(word)) || (word[i] != base[i]){
				return base[0:i]
			}
		}
	}
	return base
}