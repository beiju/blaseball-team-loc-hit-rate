import logo from './logo.svg';
import './App.css';
import { useMemo } from "react"

const original_data = [
  {
    "team": "Atlantis Georgias",
    "hit_loc": "Center Field",
    "hit_pct": 0.2547945205
  },
  {
    "team": "Atlantis Georgias",
    "hit_loc": "Deep Center Field",
    "hit_pct": 0.2156862745
  },
  {
    "team": "Atlantis Georgias",
    "hit_loc": "Deep Left Field",
    "hit_pct": 0.3442622951
  },
  {
    "team": "Atlantis Georgias",
    "hit_loc": "Deep Right Field",
    "hit_pct": 0.3521126761
  },
  {
    "team": "Atlantis Georgias",
    "hit_loc": "Infield",
    "hit_pct": 0.2212543554
  },
  {
    "team": "Atlantis Georgias",
    "hit_loc": "Left Field",
    "hit_pct": 0.267826087
  },
  {
    "team": "Atlantis Georgias",
    "hit_loc": "Right Field",
    "hit_pct": 0.2507204611
  },
  {
    "team": "Atlantis Georgias",
    "hit_loc": "The Wall",
    "hit_pct": 0.2983425414
  },
  {
    "team": "Atlantis Georgias",
    "hit_loc": "into play",
    "hit_pct": 0.2447129909
  },
  {
    "team": "Baltimore Crabs",
    "hit_loc": "Center Field",
    "hit_pct": 0.3521126761
  },
  {
    "team": "Baltimore Crabs",
    "hit_loc": "Deep Center Field",
    "hit_pct": 0.2916666667
  },
  {
    "team": "Baltimore Crabs",
    "hit_loc": "Deep Left Field",
    "hit_pct": 0.1320754717
  },
  {
    "team": "Baltimore Crabs",
    "hit_loc": "Deep Right Field",
    "hit_pct": 0.2261904762
  },
  {
    "team": "Baltimore Crabs",
    "hit_loc": "Infield",
    "hit_pct": 0.2680067002
  },
  {
    "team": "Baltimore Crabs",
    "hit_loc": "Left Field",
    "hit_pct": 0.2285714286
  },
  {
    "team": "Baltimore Crabs",
    "hit_loc": "Right Field",
    "hit_pct": 0.3181818182
  },
  {
    "team": "Baltimore Crabs",
    "hit_loc": "The Wall",
    "hit_pct": 0.2484076433
  },
  {
    "team": "Baltimore Crabs",
    "hit_loc": "into play",
    "hit_pct": 0.2779552716
  },
  {
    "team": "Boston Flowers",
    "hit_loc": "Center Field",
    "hit_pct": 0.3142076503
  },
  {
    "team": "Boston Flowers",
    "hit_loc": "Deep Center Field",
    "hit_pct": 0.4778761062
  },
  {
    "team": "Boston Flowers",
    "hit_loc": "Deep Left Field",
    "hit_pct": 0.3384615385
  },
  {
    "team": "Boston Flowers",
    "hit_loc": "Deep Right Field",
    "hit_pct": 0.3411764706
  },
  {
    "team": "Boston Flowers",
    "hit_loc": "Infield",
    "hit_pct": 0.2300724638
  },
  {
    "team": "Boston Flowers",
    "hit_loc": "Left Field",
    "hit_pct": 0.3018181818
  },
  {
    "team": "Boston Flowers",
    "hit_loc": "Right Field",
    "hit_pct": 0.3381924198
  },
  {
    "team": "Boston Flowers",
    "hit_loc": "The Wall",
    "hit_pct": 0.393442623
  },
  {
    "team": "Boston Flowers",
    "hit_loc": "into play",
    "hit_pct": 0.2955974843
  },
  {
    "team": "Breckenridge Jazz Hands",
    "hit_loc": "Center Field",
    "hit_pct": 0.3195266272
  },
  {
    "team": "Breckenridge Jazz Hands",
    "hit_loc": "Deep Center Field",
    "hit_pct": 0.3658536585
  },
  {
    "team": "Breckenridge Jazz Hands",
    "hit_loc": "Deep Left Field",
    "hit_pct": 0.5138888889
  },
  {
    "team": "Breckenridge Jazz Hands",
    "hit_loc": "Deep Right Field",
    "hit_pct": 0.3191489362
  },
  {
    "team": "Breckenridge Jazz Hands",
    "hit_loc": "Infield",
    "hit_pct": 0.24
  },
  {
    "team": "Breckenridge Jazz Hands",
    "hit_loc": "Left Field",
    "hit_pct": 0.3413897281
  },
  {
    "team": "Breckenridge Jazz Hands",
    "hit_loc": "Right Field",
    "hit_pct": 0.2883597884
  },
  {
    "team": "Breckenridge Jazz Hands",
    "hit_loc": "The Wall",
    "hit_pct": 0.4444444444
  },
  {
    "team": "Breckenridge Jazz Hands",
    "hit_loc": "into play",
    "hit_pct": 0.2692307692
  },
  {
    "team": "Canada Moist Talkers",
    "hit_loc": "Center Field",
    "hit_pct": 0.3461538462
  },
  {
    "team": "Canada Moist Talkers",
    "hit_loc": "Deep Center Field",
    "hit_pct": 0.2920353982
  },
  {
    "team": "Canada Moist Talkers",
    "hit_loc": "Deep Left Field",
    "hit_pct": 0.3272727273
  },
  {
    "team": "Canada Moist Talkers",
    "hit_loc": "Deep Right Field",
    "hit_pct": 0.1931818182
  },
  {
    "team": "Canada Moist Talkers",
    "hit_loc": "Infield",
    "hit_pct": 0.2525773196
  },
  {
    "team": "Canada Moist Talkers",
    "hit_loc": "Left Field",
    "hit_pct": 0.242582897
  },
  {
    "team": "Canada Moist Talkers",
    "hit_loc": "Right Field",
    "hit_pct": 0.237388724
  },
  {
    "team": "Canada Moist Talkers",
    "hit_loc": "The Wall",
    "hit_pct": 0.3770491803
  },
  {
    "team": "Canada Moist Talkers",
    "hit_loc": "into play",
    "hit_pct": 0.2492113565
  },
  {
    "team": "Charleston Shoe Thieves",
    "hit_loc": "Center Field",
    "hit_pct": 0.201183432
  },
  {
    "team": "Charleston Shoe Thieves",
    "hit_loc": "Deep Center Field",
    "hit_pct": 0.2820512821
  },
  {
    "team": "Charleston Shoe Thieves",
    "hit_loc": "Deep Left Field",
    "hit_pct": 0.3823529412
  },
  {
    "team": "Charleston Shoe Thieves",
    "hit_loc": "Deep Right Field",
    "hit_pct": 0.2602739726
  },
  {
    "team": "Charleston Shoe Thieves",
    "hit_loc": "Infield",
    "hit_pct": 0.1855010661
  },
  {
    "team": "Charleston Shoe Thieves",
    "hit_loc": "Left Field",
    "hit_pct": 0.2774451098
  },
  {
    "team": "Charleston Shoe Thieves",
    "hit_loc": "Right Field",
    "hit_pct": 0.2014388489
  },
  {
    "team": "Charleston Shoe Thieves",
    "hit_loc": "The Wall",
    "hit_pct": 0.28125
  },
  {
    "team": "Charleston Shoe Thieves",
    "hit_loc": "into play",
    "hit_pct": 0.2090592334
  },
  {
    "team": "Chicago Firefighters",
    "hit_loc": "Center Field",
    "hit_pct": 0.209039548
  },
  {
    "team": "Chicago Firefighters",
    "hit_loc": "Deep Center Field",
    "hit_pct": 0.3307692308
  },
  {
    "team": "Chicago Firefighters",
    "hit_loc": "Deep Left Field",
    "hit_pct": 0.3157894737
  },
  {
    "team": "Chicago Firefighters",
    "hit_loc": "Deep Right Field",
    "hit_pct": 0.2463768116
  },
  {
    "team": "Chicago Firefighters",
    "hit_loc": "Infield",
    "hit_pct": 0.21875
  },
  {
    "team": "Chicago Firefighters",
    "hit_loc": "Left Field",
    "hit_pct": 0.2392857143
  },
  {
    "team": "Chicago Firefighters",
    "hit_loc": "Right Field",
    "hit_pct": 0.3184713376
  },
  {
    "team": "Chicago Firefighters",
    "hit_loc": "The Wall",
    "hit_pct": 0.4060913706
  },
  {
    "team": "Chicago Firefighters",
    "hit_loc": "into play",
    "hit_pct": 0.3101449275
  },
  {
    "team": "Core Mechanics",
    "hit_loc": "Center Field",
    "hit_pct": 0.2890625
  },
  {
    "team": "Core Mechanics",
    "hit_loc": "Deep Center Field",
    "hit_pct": 0.3137254902
  },
  {
    "team": "Core Mechanics",
    "hit_loc": "Deep Left Field",
    "hit_pct": 0.5172413793
  },
  {
    "team": "Core Mechanics",
    "hit_loc": "Deep Right Field",
    "hit_pct": 0.2763157895
  },
  {
    "team": "Core Mechanics",
    "hit_loc": "Infield",
    "hit_pct": 0.2504378284
  },
  {
    "team": "Core Mechanics",
    "hit_loc": "Left Field",
    "hit_pct": 0.2946954813
  },
  {
    "team": "Core Mechanics",
    "hit_loc": "Right Field",
    "hit_pct": 0.2276923077
  },
  {
    "team": "Core Mechanics",
    "hit_loc": "The Wall",
    "hit_pct": 0.3538461538
  },
  {
    "team": "Core Mechanics",
    "hit_loc": "into play",
    "hit_pct": 0.2507462687
  },
  {
    "team": "Dallas Steaks",
    "hit_loc": "Center Field",
    "hit_pct": 0.2684931507
  },
  {
    "team": "Dallas Steaks",
    "hit_loc": "Deep Center Field",
    "hit_pct": 0.2743362832
  },
  {
    "team": "Dallas Steaks",
    "hit_loc": "Deep Left Field",
    "hit_pct": 0.3174603175
  },
  {
    "team": "Dallas Steaks",
    "hit_loc": "Deep Right Field",
    "hit_pct": 0.2608695652
  },
  {
    "team": "Dallas Steaks",
    "hit_loc": "Infield",
    "hit_pct": 0.2598684211
  },
  {
    "team": "Dallas Steaks",
    "hit_loc": "Left Field",
    "hit_pct": 0.2532110092
  },
  {
    "team": "Dallas Steaks",
    "hit_loc": "Right Field",
    "hit_pct": 0.2676470588
  },
  {
    "team": "Dallas Steaks",
    "hit_loc": "The Wall",
    "hit_pct": 0.2135416667
  },
  {
    "team": "Dallas Steaks",
    "hit_loc": "into play",
    "hit_pct": 0.3023255814
  },
  {
    "team": "Hades Tigers",
    "hit_loc": "Center Field",
    "hit_pct": 0.2657894737
  },
  {
    "team": "Hades Tigers",
    "hit_loc": "Deep Center Field",
    "hit_pct": 0.2975206612
  },
  {
    "team": "Hades Tigers",
    "hit_loc": "Deep Left Field",
    "hit_pct": 0.1833333333
  },
  {
    "team": "Hades Tigers",
    "hit_loc": "Deep Right Field",
    "hit_pct": 0.2615384615
  },
  {
    "team": "Hades Tigers",
    "hit_loc": "Infield",
    "hit_pct": 0.1984282908
  },
  {
    "team": "Hades Tigers",
    "hit_loc": "Left Field",
    "hit_pct": 0.2490566038
  },
  {
    "team": "Hades Tigers",
    "hit_loc": "Right Field",
    "hit_pct": 0.2857142857
  },
  {
    "team": "Hades Tigers",
    "hit_loc": "The Wall",
    "hit_pct": 0.269005848
  },
  {
    "team": "Hades Tigers",
    "hit_loc": "into play",
    "hit_pct": 0.2788461538
  },
  {
    "team": "Hawai'i Fridays",
    "hit_loc": "Center Field",
    "hit_pct": 0.3003003003
  },
  {
    "team": "Hawai'i Fridays",
    "hit_loc": "Deep Center Field",
    "hit_pct": 0.2475247525
  },
  {
    "team": "Hawai'i Fridays",
    "hit_loc": "Deep Left Field",
    "hit_pct": 0.3137254902
  },
  {
    "team": "Hawai'i Fridays",
    "hit_loc": "Deep Right Field",
    "hit_pct": 0.3296703297
  },
  {
    "team": "Hawai'i Fridays",
    "hit_loc": "Infield",
    "hit_pct": 0.2366412214
  },
  {
    "team": "Hawai'i Fridays",
    "hit_loc": "Left Field",
    "hit_pct": 0.2109227872
  },
  {
    "team": "Hawai'i Fridays",
    "hit_loc": "Right Field",
    "hit_pct": 0.3016393443
  },
  {
    "team": "Hawai'i Fridays",
    "hit_loc": "The Wall",
    "hit_pct": 0.3869047619
  },
  {
    "team": "Hawai'i Fridays",
    "hit_loc": "into play",
    "hit_pct": 0.2337662338
  },
  {
    "team": "Houston Spies",
    "hit_loc": "Center Field",
    "hit_pct": 0.2759493671
  },
  {
    "team": "Houston Spies",
    "hit_loc": "Deep Center Field",
    "hit_pct": 0.4594594595
  },
  {
    "team": "Houston Spies",
    "hit_loc": "Deep Left Field",
    "hit_pct": 0.298245614
  },
  {
    "team": "Houston Spies",
    "hit_loc": "Deep Right Field",
    "hit_pct": 0.2763157895
  },
  {
    "team": "Houston Spies",
    "hit_loc": "Infield",
    "hit_pct": 0.2602230483
  },
  {
    "team": "Houston Spies",
    "hit_loc": "Left Field",
    "hit_pct": 0.3206349206
  },
  {
    "team": "Houston Spies",
    "hit_loc": "Right Field",
    "hit_pct": 0.2240896359
  },
  {
    "team": "Houston Spies",
    "hit_loc": "The Wall",
    "hit_pct": 0.3697916667
  },
  {
    "team": "Houston Spies",
    "hit_loc": "into play",
    "hit_pct": 0.3147058824
  },
  {
    "team": "Kansas City Breath Mints",
    "hit_loc": "Center Field",
    "hit_pct": 0.2516129032
  },
  {
    "team": "Kansas City Breath Mints",
    "hit_loc": "Deep Center Field",
    "hit_pct": 0.2476190476
  },
  {
    "team": "Kansas City Breath Mints",
    "hit_loc": "Deep Left Field",
    "hit_pct": 0.3472222222
  },
  {
    "team": "Kansas City Breath Mints",
    "hit_loc": "Deep Right Field",
    "hit_pct": 0.119047619
  },
  {
    "team": "Kansas City Breath Mints",
    "hit_loc": "Infield",
    "hit_pct": 0.2337398374
  },
  {
    "team": "Kansas City Breath Mints",
    "hit_loc": "Left Field",
    "hit_pct": 0.2387755102
  },
  {
    "team": "Kansas City Breath Mints",
    "hit_loc": "Right Field",
    "hit_pct": 0.2343234323
  },
  {
    "team": "Kansas City Breath Mints",
    "hit_loc": "The Wall",
    "hit_pct": 0.2339181287
  },
  {
    "team": "Kansas City Breath Mints",
    "hit_loc": "into play",
    "hit_pct": 0.2913385827
  },
  {
    "team": "LA Unlimited Tacos",
    "hit_loc": "Center Field",
    "hit_pct": 0.3044619423
  },
  {
    "team": "LA Unlimited Tacos",
    "hit_loc": "Deep Center Field",
    "hit_pct": 0.2956521739
  },
  {
    "team": "LA Unlimited Tacos",
    "hit_loc": "Deep Left Field",
    "hit_pct": 0.2857142857
  },
  {
    "team": "LA Unlimited Tacos",
    "hit_loc": "Deep Right Field",
    "hit_pct": 0.3012048193
  },
  {
    "team": "LA Unlimited Tacos",
    "hit_loc": "Infield",
    "hit_pct": 0.2437275986
  },
  {
    "team": "LA Unlimited Tacos",
    "hit_loc": "Left Field",
    "hit_pct": 0.3645990923
  },
  {
    "team": "LA Unlimited Tacos",
    "hit_loc": "Right Field",
    "hit_pct": 0.3012820513
  },
  {
    "team": "LA Unlimited Tacos",
    "hit_loc": "The Wall",
    "hit_pct": 0.3504672897
  },
  {
    "team": "LA Unlimited Tacos",
    "hit_loc": "into play",
    "hit_pct": 0.2939481268
  },
  {
    "team": "Mexico City Wild Wings",
    "hit_loc": "Center Field",
    "hit_pct": 0.2233333333
  },
  {
    "team": "Mexico City Wild Wings",
    "hit_loc": "Deep Center Field",
    "hit_pct": 0.3026315789
  },
  {
    "team": "Mexico City Wild Wings",
    "hit_loc": "Deep Left Field",
    "hit_pct": 0.5862068966
  },
  {
    "team": "Mexico City Wild Wings",
    "hit_loc": "Deep Right Field",
    "hit_pct": 0.28
  },
  {
    "team": "Mexico City Wild Wings",
    "hit_loc": "Infield",
    "hit_pct": 0.2397540984
  },
  {
    "team": "Mexico City Wild Wings",
    "hit_loc": "Left Field",
    "hit_pct": 0.2588932806
  },
  {
    "team": "Mexico City Wild Wings",
    "hit_loc": "Right Field",
    "hit_pct": 0.2724137931
  },
  {
    "team": "Mexico City Wild Wings",
    "hit_loc": "The Wall",
    "hit_pct": 0.3084577114
  },
  {
    "team": "Mexico City Wild Wings",
    "hit_loc": "into play",
    "hit_pct": 0.2481751825
  },
  {
    "team": "Miami Dale",
    "hit_loc": "Center Field",
    "hit_pct": 0.2445054945
  },
  {
    "team": "Miami Dale",
    "hit_loc": "Deep Center Field",
    "hit_pct": 0.2242990654
  },
  {
    "team": "Miami Dale",
    "hit_loc": "Deep Left Field",
    "hit_pct": 0.1489361702
  },
  {
    "team": "Miami Dale",
    "hit_loc": "Deep Right Field",
    "hit_pct": 0.3026315789
  },
  {
    "team": "Miami Dale",
    "hit_loc": "Infield",
    "hit_pct": 0.2330960854
  },
  {
    "team": "Miami Dale",
    "hit_loc": "Left Field",
    "hit_pct": 0.3
  },
  {
    "team": "Miami Dale",
    "hit_loc": "Right Field",
    "hit_pct": 0.2926829268
  },
  {
    "team": "Miami Dale",
    "hit_loc": "The Wall",
    "hit_pct": 0.2670454545
  },
  {
    "team": "Miami Dale",
    "hit_loc": "into play",
    "hit_pct": 0.3103448276
  },
  {
    "team": "Moab Hellmouth Sunbeams",
    "hit_loc": "Center Field",
    "hit_pct": 0.3482142857
  },
  {
    "team": "Moab Hellmouth Sunbeams",
    "hit_loc": "Deep Center Field",
    "hit_pct": 0.3191489362
  },
  {
    "team": "Moab Hellmouth Sunbeams",
    "hit_loc": "Deep Left Field",
    "hit_pct": 0.2727272727
  },
  {
    "team": "Moab Hellmouth Sunbeams",
    "hit_loc": "Deep Right Field",
    "hit_pct": 0.2857142857
  },
  {
    "team": "Moab Hellmouth Sunbeams",
    "hit_loc": "Infield",
    "hit_pct": 0.2320143885
  },
  {
    "team": "Moab Hellmouth Sunbeams",
    "hit_loc": "Left Field",
    "hit_pct": 0.2841726619
  },
  {
    "team": "Moab Hellmouth Sunbeams",
    "hit_loc": "Right Field",
    "hit_pct": 0.253125
  },
  {
    "team": "Moab Hellmouth Sunbeams",
    "hit_loc": "The Wall",
    "hit_pct": 0.3169398907
  },
  {
    "team": "Moab Hellmouth Sunbeams",
    "hit_loc": "into play",
    "hit_pct": 0.3116883117
  },
  {
    "team": "New York Millennials",
    "hit_loc": "Center Field",
    "hit_pct": 0.2935323383
  },
  {
    "team": "New York Millennials",
    "hit_loc": "Deep Center Field",
    "hit_pct": 0.4272727273
  },
  {
    "team": "New York Millennials",
    "hit_loc": "Deep Left Field",
    "hit_pct": 0.2545454545
  },
  {
    "team": "New York Millennials",
    "hit_loc": "Deep Right Field",
    "hit_pct": 0.3411764706
  },
  {
    "team": "New York Millennials",
    "hit_loc": "Infield",
    "hit_pct": 0.3181818182
  },
  {
    "team": "New York Millennials",
    "hit_loc": "Left Field",
    "hit_pct": 0.2452531646
  },
  {
    "team": "New York Millennials",
    "hit_loc": "Right Field",
    "hit_pct": 0.2881355932
  },
  {
    "team": "New York Millennials",
    "hit_loc": "The Wall",
    "hit_pct": 0.3620689655
  },
  {
    "team": "New York Millennials",
    "hit_loc": "into play",
    "hit_pct": 0.3371757925
  },
  {
    "team": "Ohio Worms",
    "hit_loc": "Center Field",
    "hit_pct": 0.2687338501
  },
  {
    "team": "Ohio Worms",
    "hit_loc": "Deep Center Field",
    "hit_pct": 0.3577981651
  },
  {
    "team": "Ohio Worms",
    "hit_loc": "Deep Left Field",
    "hit_pct": 0.3787878788
  },
  {
    "team": "Ohio Worms",
    "hit_loc": "Deep Right Field",
    "hit_pct": 0.3103448276
  },
  {
    "team": "Ohio Worms",
    "hit_loc": "Infield",
    "hit_pct": 0.2474916388
  },
  {
    "team": "Ohio Worms",
    "hit_loc": "Left Field",
    "hit_pct": 0.3200636943
  },
  {
    "team": "Ohio Worms",
    "hit_loc": "Right Field",
    "hit_pct": 0.396373057
  },
  {
    "team": "Ohio Worms",
    "hit_loc": "The Wall",
    "hit_pct": 0.391959799
  },
  {
    "team": "Ohio Worms",
    "hit_loc": "into play",
    "hit_pct": 0.3136094675
  },
  {
    "team": "Philly Pies",
    "hit_loc": "Center Field",
    "hit_pct": 0.299719888
  },
  {
    "team": "Philly Pies",
    "hit_loc": "Deep Center Field",
    "hit_pct": 0.3039215686
  },
  {
    "team": "Philly Pies",
    "hit_loc": "Deep Left Field",
    "hit_pct": 0.4107142857
  },
  {
    "team": "Philly Pies",
    "hit_loc": "Deep Right Field",
    "hit_pct": 0.2166666667
  },
  {
    "team": "Philly Pies",
    "hit_loc": "Infield",
    "hit_pct": 0.252354049
  },
  {
    "team": "Philly Pies",
    "hit_loc": "Left Field",
    "hit_pct": 0.329566855
  },
  {
    "team": "Philly Pies",
    "hit_loc": "Right Field",
    "hit_pct": 0.2893258427
  },
  {
    "team": "Philly Pies",
    "hit_loc": "The Wall",
    "hit_pct": 0.3523809524
  },
  {
    "team": "Philly Pies",
    "hit_loc": "into play",
    "hit_pct": 0.2820512821
  },
  {
    "team": "San Francisco Lovers",
    "hit_loc": "Center Field",
    "hit_pct": 0.2314049587
  },
  {
    "team": "San Francisco Lovers",
    "hit_loc": "Deep Center Field",
    "hit_pct": 0.3628318584
  },
  {
    "team": "San Francisco Lovers",
    "hit_loc": "Deep Left Field",
    "hit_pct": 0.2777777778
  },
  {
    "team": "San Francisco Lovers",
    "hit_loc": "Deep Right Field",
    "hit_pct": 0.2597402597
  },
  {
    "team": "San Francisco Lovers",
    "hit_loc": "Infield",
    "hit_pct": 0.2399232246
  },
  {
    "team": "San Francisco Lovers",
    "hit_loc": "Left Field",
    "hit_pct": 0.2192242833
  },
  {
    "team": "San Francisco Lovers",
    "hit_loc": "Right Field",
    "hit_pct": 0.2841823056
  },
  {
    "team": "San Francisco Lovers",
    "hit_loc": "The Wall",
    "hit_pct": 0.3065326633
  },
  {
    "team": "San Francisco Lovers",
    "hit_loc": "into play",
    "hit_pct": 0.2808988764
  },
  {
    "team": "Seattle Garages",
    "hit_loc": "Center Field",
    "hit_pct": 0.2724719101
  },
  {
    "team": "Seattle Garages",
    "hit_loc": "Deep Center Field",
    "hit_pct": 0.1789473684
  },
  {
    "team": "Seattle Garages",
    "hit_loc": "Deep Left Field",
    "hit_pct": 0.3709677419
  },
  {
    "team": "Seattle Garages",
    "hit_loc": "Deep Right Field",
    "hit_pct": 0.2530120482
  },
  {
    "team": "Seattle Garages",
    "hit_loc": "Infield",
    "hit_pct": 0.2918287938
  },
  {
    "team": "Seattle Garages",
    "hit_loc": "Left Field",
    "hit_pct": 0.3126213592
  },
  {
    "team": "Seattle Garages",
    "hit_loc": "Right Field",
    "hit_pct": 0.3511904762
  },
  {
    "team": "Seattle Garages",
    "hit_loc": "The Wall",
    "hit_pct": 0.3715846995
  },
  {
    "team": "Seattle Garages",
    "hit_loc": "into play",
    "hit_pct": 0.3054662379
  },
  {
    "team": "Tokyo Lift",
    "hit_loc": "Center Field",
    "hit_pct": 0.3156682028
  },
  {
    "team": "Tokyo Lift",
    "hit_loc": "Deep Center Field",
    "hit_pct": 0.3391304348
  },
  {
    "team": "Tokyo Lift",
    "hit_loc": "Deep Left Field",
    "hit_pct": 0.3888888889
  },
  {
    "team": "Tokyo Lift",
    "hit_loc": "Deep Right Field",
    "hit_pct": 0.297029703
  },
  {
    "team": "Tokyo Lift",
    "hit_loc": "Infield",
    "hit_pct": 0.3523489933
  },
  {
    "team": "Tokyo Lift",
    "hit_loc": "Left Field",
    "hit_pct": 0.306557377
  },
  {
    "team": "Tokyo Lift",
    "hit_loc": "Right Field",
    "hit_pct": 0.3447368421
  },
  {
    "team": "Tokyo Lift",
    "hit_loc": "The Wall",
    "hit_pct": 0.3878504673
  },
  {
    "team": "Tokyo Lift",
    "hit_loc": "into play",
    "hit_pct": 0.2777777778
  },
  {
    "team": "Yellowstone Magic",
    "hit_loc": "Center Field",
    "hit_pct": 0.2951653944
  },
  {
    "team": "Yellowstone Magic",
    "hit_loc": "Deep Center Field",
    "hit_pct": 0.4090909091
  },
  {
    "team": "Yellowstone Magic",
    "hit_loc": "Deep Left Field",
    "hit_pct": 0.3650793651
  },
  {
    "team": "Yellowstone Magic",
    "hit_loc": "Deep Right Field",
    "hit_pct": 0.4342105263
  },
  {
    "team": "Yellowstone Magic",
    "hit_loc": "Infield",
    "hit_pct": 0.210626186
  },
  {
    "team": "Yellowstone Magic",
    "hit_loc": "Left Field",
    "hit_pct": 0.3231597846
  },
  {
    "team": "Yellowstone Magic",
    "hit_loc": "Right Field",
    "hit_pct": 0.2772861357
  },
  {
    "team": "Yellowstone Magic",
    "hit_loc": "The Wall",
    "hit_pct": 0.3942307692
  },
  {
    "team": "Yellowstone Magic",
    "hit_loc": "into play",
    "hit_pct": 0.2609970674
  }
]

function getColor(value) {
  const hue = (Math.min(1, Math.max(0, (value - 0.45) / 0.5)) * 120).toString(10)
  return ["hsl(", hue, ",100%,50%)"].join("");
}


function Team({ name, data }) {
  return (<div className="team">
    {name}
    <div className="field">
      {Object.entries(data).map(([loc, percent]) => <div
        className={loc.replace(/ /g, "_")}
        style={{backgroundColor: getColor(percent)}}
      >
        <span className="text">{loc !== "Deep Center Field" ? loc + ":" : ""} {Math.round(percent * 100)}%</span>
      </div>)}
      <div className="The_Wall2" style={{backgroundColor: getColor(data["The Wall"])}} />
    </div>
  </div> )
}

function App() {
  const data = useMemo(() => {
    let data = {};
    for (const item of original_data) {
      if (!data[item.team]) {
        data[item.team] = {}
      }
      data[item.team][item.hit_loc] = 1 - item.hit_pct
    }
    return data
  })

  return (<>
    <h1>Defense success rate by location</h1>
    <div className="App">
      {Object.entries(data).map(([team_name, team_data]) => <Team name={team_name} data={team_data} /> )}
    </div>
    </>
  );
}

export default App;
