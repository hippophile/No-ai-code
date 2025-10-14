package quizgame

import (
	"bufio"
	"encoding/csv"
	"fmt"
	"log"
	"os"
)

func Game () {
	path := "/home/thegrinder/Desktop/No-ai-code/filip/gophercises/quizGame/data/problems.csv"

	file, err := os.Open(path)
	check(err)
	defer file.Close()

	// Buffer
	r := csv.NewReader(file)
	
	// one liner scanner
	sc := bufio.NewScanner(os.Stdin)
	
	// how many lines
	recs, _ := r.ReadAll()
	lines := len(recs)

	// success counterr
	corrects := 0

	for _, record := range recs{
		fmt.Printf("%s = ", record[0])
		if !sc.Scan() { break }
		if record[1] == sc.Text() {
			corrects++
		}
	}

	fmt.Printf("You scored %d/%d\n", corrects, lines)

}




func check(err error) {
	if err != nil {
		log.Println(err)
		return
	}
	
}