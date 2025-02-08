/** @param {NS} ns */
export async function main(ns) 
{
    const target = "n00dles"
    ns.disableLog("ALL");

    ns.clearLog();
    ns.tail();

    
    while(true)
    {
        let hackLvl = ns.getHackingLevel()
        let successfulHackChance = ns.hackAnalyzeChance(target);
        ns.print("Server [" + target + "] has a hack chance of " + (successfulHackChance * 100).toFixed(2) + "%");

        let canHack = (ns.getServerRequiredHackingLevel(target) < hackLvl) ? true : false;    // ternary operator

        if(!canHack)
        {   
            ns.tprint("Insufficient hacking level to hack [" + target + "]. A hacking level of " + ns.getServerRequiredHackingLevel(target) + " is required.");
            await ns.sleep(1000);
            continue;
        }
        
        if(successfulHackChance > 0.8)
        {
            if(ns.getServerMoneyAvailable(target) < (ns.getServerMaxMoney(target) * 0.5))
            {
                ns.print("Growing server [" + target + "]");

                let growAmount = await ns.grow(target);
                let grownPercentage = (ns.getServerMoneyAvailable(target) / ns.getServerMaxMoney(target)) * 100;

                ns.print("Server [" + target + "] has grown by: " + growAmount.toFixed(2) + ". Now at " + grownPercentage.toFixed(2) + "% of max.");
                }
            else
            {
                ns.print("Unable to weaken server [" + target + "] any further. Attempting hack.");
                await hack(ns, target);
            }
        }
        else
        {
            if(ns.getServerSecurityLevel(target) > (ns.getServerMinSecurityLevel(target) * 1.1))
            {
                ns.print("Weakening server [" + target + "]")
                ns.print("Time to weaken: " + (ns.getWeakenTime(target) / 1000).toFixed(2) + " seconds.")
                await ns.weaken(target);
            }
            else
            {
                    ns.print("Unable to weaken server [" + target + "] any further. Attempting hack.");
                    await hack(ns, target); 
            }
        }
    }
}

async function hack(ns, target)
{
    ns.print("Hacking server [" + target + "]");
    let hackAmount = await ns.hack(target);
    if(hackAmount != 0)
    {
        ns.print("Server [" + target + "] has been hacked for $" + hackAmount.toFixed());
    }
    else
    {
        ns.print("Server [" + target + "] hack has failed!");
    }
    return 0;
}