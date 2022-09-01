interface Version {
    version: string,
    releaseDate: Date,
    bugs: string[] | string,
    features: string[] | string,
    author: string[] | string,
    versionType: string
   }
   
   // Version informations
   const data: Version[] = [{
    version:'MIUI V5',
    releaseDate:new Date (' 1 March 2013'),
    features:['New user interface','Google Services were removed from the Chinese version'],
    bugs:['BGSG01','BGB02','bgok03'],
    author:['A','B','C','D'],
    versionType:'enhancement'
},
{
    version:'MIUI 6',
    releaseDate:new Date('29 August 2014'),
    features:['Dropped devices running Android Jelly Bean or below'],
    bugs:['BGSG01','BGB02','bgok03'],
    author:['A','B','C','D'],
    versionType:'enhancement'
},
{
    version:'MIUI 7',
    releaseDate:new Date('13 August 2015'),
    features:[' Locked bootloader on selected old devices and all released afterwards'],
    bugs:['BGSG01','BGB02','bgok03'],
    author:['A','B','C','D'],
    versionType:'enhancement'
},
{
    version:'MIUI 8',
    releaseDate:new Date('16 June 2016'),
    features:['Added support for Second Space and Dual apps. '],
    bugs:['BGSG01','BGB02','bgok03'],
    author:['A','B','C','D'],
    versionType:'enhancement'
},
{
    version:'MIUI 9',
    releaseDate:new Date('10 August 2017'),
    features:[' Improved Notification Shade and QuickCard'],
    bugs:['BGSG01','BGB02','bgok03'],
    author:['A','B','C','D'],
    versionType:'enhancement'
},
{
    version:'MIUI 10',
    releaseDate:new Date('19 June 2018'),
    features:['New recent apps screen, volume control, Clock, Calendar and Notes '],
    bugs:['BGSG01','BGB02','bgok03'],
    author:['A','B','C','D'],
    versionType:'enhancement'
},
{
    version:'MIUI 11',
    releaseDate:new Date('22 October 2019'),
    features:['System-wide dark mode, with dark mode scheduling. '],
    bugs:['BGSG01','BGB02','bgok03'],
    author:['A','B','C','D'],
    versionType:'enhancement'
},
{
    version:'MIUI 12',
    releaseDate:new Date ('27 April 2020'),
    features:['More privacy focused '],
    bugs:['BGSG01','BGB02','bgok03'],
    author:['A','B','C','D'],
    versionType:'enhancement'
}
]
   // find Information by Year
   function findByReleaseYear(year: any) {
   let filteredYear = data.filter(n => n.releaseDate.toString().includes(year))
    console.log(`${filteredYear.length} versions were released in Year ${year}`)
    console.log(filteredYear)
    
   }
   // find Information by Bug
   function findByBug(str: string) {
    let bug = data.filter(n => n.bugs.includes(str))
    console.log(`${bug.length} version have ${str} Bug...`)
    console.log(bug)
    console.log(bug.length, "Bugs")
    
   }
   // find Information by Type
   function findByversionType(type: string) {
    
    let findType = data.filter(n => n.versionType.includes(type))
    console.log(`${findType.length} versions have ${type} type...`)
    console.table(findType)
    
   }
   // find Information by Features
   function findByfeatures(str: string) {
    
    let feature = data.filter(n => n.features.includes(str))
    console.log(`${feature.length} versions have ${str} Feature...`)
    console.log(feature)
    
   }
   /*find Information by Author Name
   function findByauthor(name: string) {
    console.log("---------------------------------------------------------------------------")
    let authorName = data.filter(n => n.author.includes(name))
    console.log(`${authorName.length} version developed by ${name}...`)
    console.log(authorName)
    console.log("---------------------------------------------------------------------------")
   }*/
   // find Information by Version
   function findByversion(ver: string) {
    
    let version = data.filter(n => n.version == ver)
    console.log(version)
    
   }
   // Finding which author had more Updated
   function findHighestUpdatedByAuthor() {
    let authorNames: string[] = []
    data.forEach(element => {
    for (let i of element.author) {
    authorNames.push(i)
    }
    });
    let m = 1
    let authorName = "default";
    let mostFrequent = 1
    for (let i = 0; i < authorNames.length; i++) {
    for (let j = 1; j < authorNames.length; j++) {
    if (authorNames[i] == authorNames[j]) {
    m++
    }
    if (mostFrequent < m) {
    mostFrequent = m
    authorName = authorNames[i]
    }
    }
    m = 0
    }
    
    console.log(`The author ${authorName} has worked on more no of releases, the count is ${mostFrequent}`)
   
   }
   
   findHighestUpdatedByAuthor()
   findByType("patch")
   findByBug("BGSG01")
   findByReleaseYear("2020")
   findByFeature("67A")
   findByversion("MIUI 8")