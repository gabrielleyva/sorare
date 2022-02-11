
class Card:

    def cardQuery(self, slug):
        return """{
    
    card(slug: "%s") {
        openEnglishAuction {
        currentPrice
        bids(first: 5) {
            nodes {
            amount
                    }
                }
            }
        name
        power
        powerBreakdown {
        captain
        fidelity
        version
        xp
        }
        
        cardEdition {
        name
        displayName
            }
            age
        grade
        onSale
        rarity
        owner {
        id
            }
        priceRange {
        min
        max
            }
        xp
        player {
        activeNationalTeam {
            name
        }
            }
    }
    }""" % (slug)