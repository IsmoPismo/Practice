package main

import (
	"fmt"
	"sort"
	"strings"
)

type markdown []string

func (md markdown) Len() int           { return len(md) }
func (md markdown) Swap(i, j int)      { md[i], md[j] = md[j], md[i] }
func (md markdown) Less(i, j int) bool { return md[i] < md[j] }

func main() {
	ss := []string{`01_Paragraf_and_Heading/      11_Hands_on_CSS/       21_Hands_on_FlexBox/         31_Position/             41_Font-Awesome/            51_Side_Bar_Fly-out/
02_Sorted_and_Unsorted_List/  12_Hands_on_CSS_2/     22_Media_Query/              32_Hands_on_Postions/    42_SVG/                     52_Gradient/
03_Emmet/                     13_CSS_Specicivity/    23_Hands_on_Media_Query/     33_Float/                43_Full_Page/               54_Markdown/
04_Link_Element/              14_Hand_on_CSS_3/      24_Google_Flexbox/           34_Hands_on_Float/       44_Favicon/                 96_Complete_JS/
05_Hands_on_Exe/              15_Text_Formating/     25_Hands_on_Google_FlexBox/  35_Hands_on_Display/     45_Flexbox_Practicum_I/     97_Javascript_First-Steps/
06_Border/                    16_Hands_on_CSS_3/     26_Responsive_Menu/          36_Refactoring/          46_Transitions_Animations/  98_Shayhowe/
07_Display_Property/          17_Semantic_HTML/      27_Above_the_Fold/           37_Page_Above_the_Fold/  47_Excourse-MDN-FlexBox/    99_Guitar_Page/
08_CSS_Exe/                   18_Hand_on_Semantics/  28_Holy_Grail/               38_Expanding_Skillset/   48_Excourse-Grid/
09_CSS_Selector/              19_Review_Display/     29_Holy_Grail_II/            39_Meta_Viewport/        49_Flexbox_Practicum_II/
10_McLaud_CSS_Reset/          20_FlexBox/            30_Hands_on_Google_Flex/     40_Graphics/             50_Hands_on_Seagul/
`}
	s := strings.Join([]string(ss), "")
	bs := []byte(s)
	end := strings.Split(string(bs), "/")
	md := markdown(end)
	for o, v := range md {
		md[o] = strings.TrimSpace(v) + "\n"
	}
	sort.Strings(md)
	fmt.Println(md)
}
