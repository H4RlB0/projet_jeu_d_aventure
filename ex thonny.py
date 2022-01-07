def maxtuple(mon_tuple):
    maxi = mon_tuple[0]
    for n in mon_tuple :
        if n >= maxi:
            maxi = n
    return maxi
  
def mintuple(mon_tuple):
    mini = mon_tuple[0]
    for n in mon_tuple :
        if n <= mini:
            mini = n
    return mini    
    
def sommetuple(mon_tuple):
    somme = 0
    for n in mon_tuple :
        somme = somme + n
    return somme    

def moyennetuple(mon_tuple):
    somme = sommetuple(mon_tuple)
    nb = 0
    for n in mon_tuple:
        nb = nb + 1
    return somme/nb
    
def estPalin(mon_tuple) :
    for i in range ((len(mon_tuple))//2) :
        if mon_tuple[i] != mon_tuple[-(i+1)]:
            return ('non')
        return('oui')             