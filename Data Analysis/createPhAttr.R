# ********** Start of header **************
# Title: Phone - Correlated/Uncorrelated attributes
#                Create array of phone attributes for JavaScript experiment
#
# Author: J-P Cavallaro  (jon-paul.cavallaro@uon.edu.au)
# Date: 03-03-2020
#
# *********** End of header ****************

# Two common commands at the start of an R script are:
rm(list=ls()) # Clear R's memory


# Load and install required packages
pkgs = c("tidyverse", "readxl", "ggforce")
for (pkg in pkgs){
  if (!require(pkg, character.only = T)){
    install.packages(pkg)
    library(pkg)
  }
}

# locate file directory
setwd("/Users/jpc/Documents/PhD/Experiments/Exp_1c-Phone Cor/Data Analysis")
# Read in excel sheet with phone attributes
phoneAtts <- read_excel("phone-attributes.xlsx")
# Remove brand and model columns
phoneAtts <- select(phoneAtts,
                    c(`price ($)`, `camera (MP)`, `memory (GB)`, 
                      `Device screen size (inches)`, `pixels height`, 
                      `pixels width`)) %>% # Change column names
  rename(c("price" = `price ($)`, "camera" = `camera (MP)`, "memory" = `memory (GB)`, 
           "screen_size" = `Device screen size (inches)`)) %>% # Create resolution column
  unite("resolution", c(`pixels height`, `pixels width`), sep = " x ")
# Export as csv  
write_excel_csv(x = phoneAtts, path = "phoneAtts.csv")
               