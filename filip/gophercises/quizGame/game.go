package quizgame

import (
	"bufio"
	"encoding/csv"
	"fmt"
	"log"
	"os"
	"strconv"
	"time"
)

func Game () {
	path := "/home/thegrinder/Desktop/No-ai-code/filip/gophercises/quizGame/data/problems.csv"

	// if you run the game with the flag -s=x, x will be the seconds you will have to answer the qs
	// else it is 30s
	
	seconds := 2

	if len(os.Args) == 1{
		
	} else {
		// TODO check if flag is right
		flag := os.Args[1]
		_, err := strconv.Atoi(flag[3:])
		check(err)
		seconds, _= strconv.Atoi(flag[3:])
	}
	

	file, err := os.Open(path)
	check(err)
	defer file.Close()

	// Buffer
	r := csv.NewReader(file)
	
	// one liner scanner
	sc := bufio.NewScanner(os.Stdin)
	
	// how many lines
	recs, _ := r.ReadAll()	// it return [][]string
	lines := len(recs)

	// success counterr
	corrects := 0

	start := time.Now()
	for _, record := range recs{
		
		// time managment 
		elapsed := time.Since(start)
		if elapsed >= time.Duration(seconds)*time.Second{
			fmt.Printf("Time is up!")
			break
		}

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