const coursesData = [
  {
    id: 1,
    name: "Blockchain Technology",
    instructor: "Tobe Okenden",
    description:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    enrollmentStatus: "In Progress",
    thumbnail:
      "https://robohash.org/possimusrationesaepe.png?size=50x50&set=set1",
    duration: "16 weeks",
    location: "In-Person",
    prerequisites: ["databases"],
    syllabus: [
      {
        week: 1,
        topic: "Ms",
        content:
          "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      },
      {
        week: 2,
        topic: "Mrs",
        content:
          "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      },
      {
        week: 3,
        topic: "Mrs",
        content:
          "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      },
      {
        week: 4,
        topic: "Dr",
        content:
          "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      },
    ],
    students: [
      { id: 9, name: "Car Orniz", email: "maloigi8@ow.ly" },

      {
        id: 19,
        name: "Mar Simeoni",
        email: "mlazenbyi@odnoklassniki.ru",
      },

      {
        id: 37,
        name: "Robinetta Medcraft",
        email: "jshurey10@indiatimes.com",
      },

      {
        id: 44,
        name: "Eugenie Eves",
        email: "kguerrazzi17@pinterest.com",
      },
    ],
  },
  {
    id: 2,
    name: "Software Engineering",
    instructor: "Ethelyn Mounsie",
    description:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    enrollmentStatus: "Open",
    thumbnail: "https://robohash.org/suntetvoluptatem.png?size=50x50&set=set1",
    duration: "4 weeks",
    location: "Online",
    prerequisites: ["databases", "mobile development"],
    syllabus: [
      {
        week: 1,
        topic: "Dr",
        content:
          "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      },
      {
        week: 2,
        topic: "Dr",
        content:
          "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      },
      {
        week: 3,
        topic: "Honorable",
        content:
          "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      },
      {
        week: 4,
        topic: "Mr",
        content:
          "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      },
      {
        week: 5,
        topic: "Dr",
        content:
          "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      },
    ],
    students: [
      { id: 4, name: "Feliks Samett", email: "rgirvan3@ask.com" },

      { id: 10, name: "Daune Limer", email: "aconnett9@edublogs.org" },

      { id: 20, name: "Lola Lavrick", email: "bmcdonaghj@harvard.edu" },

      { id: 38, name: "Lorraine Tims", email: "dgiovanardi11@ehow.com" },
    ],
  },
  {
    id: 3,
    name: "Virtual Reality",
    instructor: "Ulric Muzzollo",
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    enrollmentStatus: "Closed",
    thumbnail:
      "https://robohash.org/temporibusvoluptatummaxime.png?size=50x50&set=set1",
    duration: "16 weeks",
    location: "Online",
    prerequisites: ["networking", "internet of things"],
    syllabus: [],
    students: [
      {
        id: 36,
        name: "Bellanca Hurdidge",
        email: "smalzardz@google.com",
      },

      {
        id: 47,
        name: "Jordain Oats",
        email: "dtremollet1a@soundcloud.com",
      },
    ],
  },
  {
    id: 4,
    name: "Ethical Hacking",
    instructor: "Judie Kiwitz",
    description:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    enrollmentStatus: "Open",
    thumbnail: "https://robohash.org/eterrormolestiae.png?size=50x50&set=set1",
    duration: "4 weeks",
    location: "Hybrid",
    prerequisites: ["game development"],
    syllabus: [
      {
        week: 1,
        topic: "Mr",
        content:
          "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      },
      {
        week: 2,
        topic: "Mr",
        content:
          "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      },
    ],
    students: [
      {
        id: 12,
        name: "Benny Cartmale",
        email: "tbexleyb@timesonline.co.uk",
      },
    ],
  },
  {
    id: 5,
    name: "Digital Forensics",
    instructor: "Fayre Isenor",
    description:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    enrollmentStatus: "Open",
    thumbnail: "https://robohash.org/doloremquialibero.png?size=50x50&set=set1",
    duration: "4 weeks",
    location: "In-Person",
    prerequisites: ["networking", "cloud computing"],
    syllabus: [
      {
        week: 1,
        topic: "Dr",
        content:
          "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      },
      {
        week: 2,
        topic: "Rev",
        content:
          "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
      },
    ],
    students: [
      {
        id: 18,
        name: "Ina Vasishchev",
        email: "mbeddallh@aboutads.info",
      },

      { id: 39, name: "Sawyere Raccio", email: "dantecki12@state.tx.us" },
    ],
  },
  {
    id: 6,
    name: "Game Development",
    instructor: "Rem Robken",
    description:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    enrollmentStatus: "Closed",
    thumbnail: "https://robohash.org/providentetquo.png?size=50x50&set=set1",
    duration: "8 weeks",
    location: "Online",
    prerequisites: ["cybersecurity"],
    syllabus: [
      {
        week: 1,
        topic: "Mr",
        content:
          "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      },
      {
        week: 2,
        topic: "Dr",
        content:
          "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
      },
      {
        week: 3,
        topic: "Mr",
        content:
          "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
      },
      {
        week: 4,
        topic: "Ms",
        content:
          "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      },
      {
        week: 5,
        topic: "Rev",
        content:
          "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      },
    ],
    students: [
      { id: 46, name: "Cyril Rendle", email: "branshaw19@google.es" },

      {
        id: 56,
        name: "Dacia Darridon",
        email: "ebertomier1j@redcross.org",
      },

      { id: 70, name: "Dania Jerred", email: "chelix1x@t-online.de" },

      { id: 79, name: "Danielle Rowat", email: "cellaman26@oakley.com" },
    ],
  },
  {
    id: 7,
    name: "Embedded Systems",
    instructor: "Alfie Costerd",
    description:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    enrollmentStatus: "Closed",
    thumbnail: "https://robohash.org/quidemeumin.png?size=50x50&set=set1",
    duration: "12 weeks",
    location: "Online",
    prerequisites: ["networking", "virtual reality"],
    syllabus: [
      {
        week: 1,
        topic: "Dr",
        content:
          "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      },
      {
        week: 2,
        topic: "Ms",
        content:
          "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      },
      {
        week: 3,
        topic: "Mr",
        content:
          "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
      },
      {
        week: 4,
        topic: "Mrs",
        content:
          "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      },
    ],
    students: [
      {
        id: 12,
        name: "Benny Cartmale",
        email: "tbexleyb@timesonline.co.uk",
      },

      { id: 28, name: "Bobbi Harlick", email: "bnoddler@people.com.cn" },

      {
        id: 41,
        name: "Catharina Kline",
        email: "alorkings14@miitbeian.gov.cn",
      },

      { id: 48, name: "Andros Shasnan", email: "jturnpenny1b@ca.gov" },

      { id: 58, name: "Efren Primo", email: "twhewill1l@usgs.gov" },

      { id: 71, name: "Rogerio Wynes", email: "qianetti1y@1und1.de" },

      { id: 79, name: "Danielle Rowat", email: "cellaman26@oakley.com" },

      {
        id: 82,
        name: "Krystal Schleicher",
        email: "hcoultish29@plala.or.jp",
      },
    ],
  },
  {
    id: 8,
    name: "Operating Systems",
    instructor: "Les O'Feeney",
    description:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://robohash.org/providentexercitationemrerum.png?size=50x50&set=set1",
    duration: "4 weeks",
    location: "Online",
    prerequisites: ["web development"],
    syllabus: [
      {
        week: 1,
        topic: "Mrs",
        content:
          "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      },
      {
        week: 2,
        topic: "Rev",
        content:
          "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      },
      {
        week: 3,
        topic: "Mr",
        content:
          "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      },
      {
        week: 4,
        topic: "Honorable",
        content:
          "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
      },
    ],
    students: [
      {
        id: 36,
        name: "Bellanca Hurdidge",
        email: "smalzardz@google.com",
      },

      {
        id: 55,
        name: "Sadye Langeley",
        email: "lgoodbanne1i@guardian.co.uk",
      },

      { id: 66, name: "Willie Vince", email: "aboyer1t@si.edu" },
    ],
  },
  {
    id: 9,
    name: "Computer Networks",
    instructor: "Loreen Egiloff",
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    enrollmentStatus: "Closed",
    thumbnail:
      "https://robohash.org/nihilmolestiasquasi.png?size=50x50&set=set1",
    duration: "4 weeks",
    location: "In-Person",
    prerequisites: ["algorithms", "bioinformatics"],
    syllabus: [
      {
        week: 1,
        topic: "Honorable",
        content:
          "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      },
      {
        week: 2,
        topic: "Rev",
        content:
          "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      },
      {
        week: 3,
        topic: "Rev",
        content:
          "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
      },
      {
        week: 4,
        topic: "Ms",
        content:
          "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      },
    ],
    students: [
      { id: 32, name: "Erik Napleton", email: "fsoppv@kickstarter.com" },

      { id: 46, name: "Cyril Rendle", email: "branshaw19@google.es" },

      { id: 60, name: "Phip Mabbitt", email: "ldefraine1n@mac.com" },

      { id: 72, name: "Rudd Evens", email: "flefleming1z@mit.edu" },

      {
        id: 77,
        name: "Verene Skellington",
        email: "bclaxton24@vistaprint.com",
      },
    ],
  },
  {
    id: 10,
    name: "Parallel and Distributed Computing",
    instructor: "Benedick Ciobotaru",
    description:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    enrollmentStatus: "Closed",
    thumbnail: "https://robohash.org/voluptatemeumex.png?size=50x50&set=set1",
    duration: "8 weeks",
    location: "In-Person",
    prerequisites: ["augmented reality", "computer vision"],
    syllabus: [
      {
        week: 1,
        topic: "Rev",
        content:
          "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      },
      {
        week: 2,
        topic: "Mrs",
        content:
          "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      },
      {
        week: 3,
        topic: "Mrs",
        content:
          "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      },
      {
        week: 4,
        topic: "Ms",
        content:
          "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      },
    ],
    students: [
      {
        id: 56,
        name: "Dacia Darridon",
        email: "ebertomier1j@redcross.org",
      },

      { id: 66, name: "Willie Vince", email: "aboyer1t@si.edu" },
    ],
  },
  {
    id: 11,
    name: "Computer Graphics",
    instructor: "Vic Clist",
    description:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    enrollmentStatus: "Closed",
    thumbnail: "https://robohash.org/asperioresquiaut.png?size=50x50&set=set1",
    duration: "4 weeks",
    location: "Hybrid",
    prerequisites: ["artificial intelligence"],
    syllabus: [
      {
        week: 1,
        topic: "Mr",
        content:
          "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      },
      {
        week: 2,
        topic: "Mr",
        content:
          "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
      },
      {
        week: 3,
        topic: "Honorable",
        content:
          "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
      },
      {
        week: 4,
        topic: "Mr",
        content:
          "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      },
      {
        week: 5,
        topic: "Dr",
        content:
          "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
      },
    ],
    students: [
      {
        id: 24,
        name: "Cyndie Petrello",
        email: "rlimrickn@geocities.com",
      },

      {
        id: 30,
        name: "Zolly Wooderson",
        email: "ahaddestont@plala.or.jp",
      },

      { id: 39, name: "Sawyere Raccio", email: "dantecki12@state.tx.us" },
    ],
  },
  {
    id: 12,
    name: "Cybersecurity",
    instructor: "Willem Zorener",
    description:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    enrollmentStatus: "Open",
    thumbnail: "https://robohash.org/hicvelitlaborum.png?size=50x50&set=set1",
    duration: "16 weeks",
    location: "Online",
    prerequisites: ["algorithms", "cloud computing"],
    syllabus: [],
    students: [{ id: 46, name: "Cyril Rendle", email: "branshaw19@google.es" }],
  },
  {
    id: 13,
    name: "Augmented Reality",
    instructor: "Jacob Cayser",
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    enrollmentStatus: "Closed",
    thumbnail:
      "https://robohash.org/repudiandaerationesed.png?size=50x50&set=set1",
    duration: "12 weeks",
    location: "Online",
    prerequisites: ["algorithms"],
    syllabus: [
      {
        week: 1,
        topic: "Honorable",
        content:
          "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
      },
      {
        week: 2,
        topic: "Mr",
        content:
          "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      },
      {
        week: 3,
        topic: "Ms",
        content:
          "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      },
    ],
    students: [
      { id: 14, name: "Far Collibear", email: "bseamansd@is.gd" },

      { id: 26, name: "Aviva Bowser", email: "cshipcottp@bbb.org" },
    ],
  },
  {
    id: 14,
    name: "Robotics",
    instructor: "Cobb Lalley",
    description:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    enrollmentStatus: "In Progress",
    thumbnail: "https://robohash.org/minusmaximecumque.png?size=50x50&set=set1",
    duration: "12 weeks",
    location: "In-Person",
    prerequisites: ["robotics", "augmented reality"],
    syllabus: [],
    students: [
      {
        id: 1,
        name: "Lindy Cotesford",
        email: "rbrinkworth0@odnoklassniki.ru",
      },

      {
        id: 2,
        name: "Dani Roller",
        email: "glangthorn1@wunderground.com",
      },

      { id: 13, name: "Joey Mattiessen", email: "pchivertonc@nifty.com" },

      { id: 23, name: "Laney Swapp", email: "cturfesm@soup.io" },

      {
        id: 36,
        name: "Bellanca Hurdidge",
        email: "smalzardz@google.com",
      },

      {
        id: 55,
        name: "Sadye Langeley",
        email: "lgoodbanne1i@guardian.co.uk",
      },
    ],
  },
  {
    id: 15,
    name: "Natural Language Processing",
    instructor: "Alfie Gouldbourn",
    description:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    enrollmentStatus: "Closed",
    thumbnail: "https://robohash.org/minimaquisautem.png?size=50x50&set=set1",
    duration: "16 weeks",
    location: "In-Person",
    prerequisites: ["web development"],
    syllabus: [
      {
        week: 1,
        topic: "Rev",
        content:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
      },
      {
        week: 2,
        topic: "Ms",
        content:
          "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      },
      {
        week: 3,
        topic: "Honorable",
        content:
          "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      },
      {
        week: 4,
        topic: "Mrs",
        content:
          "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      },
    ],
    students: [
      {
        id: 31,
        name: "Michelina Kharchinski",
        email: "mmarkussenu@sakura.ne.jp",
      },

      {
        id: 37,
        name: "Robinetta Medcraft",
        email: "jshurey10@indiatimes.com",
      },

      { id: 45, name: "Karon Anselmi", email: "tcartin18@bloomberg.com" },
    ],
  },
  {
    id: 16,
    name: "Computer Architecture",
    instructor: "Rufe Swainsbury",
    description:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://robohash.org/doloribusomnisdicta.png?size=50x50&set=set1",
    duration: "8 weeks",
    location: "Hybrid",
    prerequisites: ["web development"],
    syllabus: [
      {
        week: 1,
        topic: "Mrs",
        content:
          "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      },
      {
        week: 2,
        topic: "Mr",
        content:
          "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      },
      {
        week: 3,
        topic: "Honorable",
        content:
          "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      },
      {
        week: 4,
        topic: "Dr",
        content:
          "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      },
    ],
    students: [
      {
        id: 50,
        name: "Gilemette Screeton",
        email: "msevery1d@list-manage.com",
      },
    ],
  },
  {
    id: 17,
    name: "Augmented Reality",
    instructor: "Verge Crack",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    enrollmentStatus: "Closed",
    thumbnail:
      "https://robohash.org/doloremreiciendisquis.png?size=50x50&set=set1",
    duration: "12 weeks",
    location: "In-Person",
    prerequisites: ["computer architecture"],
    syllabus: [],
    students: [
      { id: 40, name: "Allix Webland", email: "lrickerd13@godaddy.com" },

      {
        id: 49,
        name: "Leland Plaid",
        email: "dabrahamovitz1c@stumbleupon.com",
      },

      { id: 57, name: "Claresta Pittoli", email: "mpepon1k@ibm.com" },

      {
        id: 74,
        name: "Veronique Berresford",
        email: "wmarr21@hatena.ne.jp",
      },
    ],
  },
  {
    id: 18,
    name: "Cloud Computing",
    instructor: "Carroll Edgar",
    description:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    enrollmentStatus: "Closed",
    thumbnail:
      "https://robohash.org/ipsavoluptatemarchitecto.png?size=50x50&set=set1",
    duration: "16 weeks",
    location: "Hybrid",
    prerequisites: ["data structures", "game development"],
    syllabus: [
      {
        week: 1,
        topic: "Mrs",
        content:
          "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
      },
      {
        week: 2,
        topic: "Mrs",
        content:
          "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      },
      {
        week: 3,
        topic: "Dr",
        content:
          "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      },
      {
        week: 4,
        topic: "Mr",
        content:
          "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      },
      {
        week: 5,
        topic: "Mr",
        content:
          "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      },
    ],
    students: [],
  },
  {
    id: 19,
    name: "Introduction to Algorithms",
    instructor: "Robb Ewestace",
    description:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    enrollmentStatus: "In Progress",
    thumbnail:
      "https://robohash.org/nonexplicabodolores.png?size=50x50&set=set1",
    duration: "4 weeks",
    location: "Hybrid",
    prerequisites: ["game development"],
    syllabus: [],
    students: [],
  },
  {
    id: 20,
    name: "Web Development",
    instructor: "Archambault Extill",
    description:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    enrollmentStatus: "Closed",
    thumbnail: "https://robohash.org/voluptatesnonid.png?size=50x50&set=set1",
    duration: "4 weeks",
    location: "Hybrid",
    prerequisites: ["augmented reality", "blockchain"],
    syllabus: [
      {
        week: 1,
        topic: "Ms",
        content:
          "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      },
    ],
    students: [
      {
        id: 63,
        name: "Kaela O'Regan",
        email: "jshatliffe1q@wikipedia.org",
      },

      { id: 69, name: "Dell Flaverty", email: "idemchen1w@icq.com" },
    ],
  },
  {
    id: 21,
    name: "Computer Vision",
    instructor: "Nicolea Gapp",
    description:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    enrollmentStatus: "Open",
    thumbnail: "https://robohash.org/ametquiquo.png?size=50x50&set=set1",
    duration: "4 weeks",
    location: "Hybrid",
    prerequisites: ["web development", "game development"],
    syllabus: [
      {
        week: 1,
        topic: "Honorable",
        content:
          "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      },
      {
        week: 2,
        topic: "Mr",
        content:
          "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      },
    ],
    students: [
      {
        id: 47,
        name: "Jordain Oats",
        email: "dtremollet1a@soundcloud.com",
      },

      { id: 58, name: "Efren Primo", email: "twhewill1l@usgs.gov" },

      {
        id: 77,
        name: "Verene Skellington",
        email: "bclaxton24@vistaprint.com",
      },
    ],
  },
  {
    id: 22,
    name: "Information Retrieval",
    instructor: "Helen Vasnetsov",
    description:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://robohash.org/odionecessitatibusblanditiis.png?size=50x50&set=set1",
    duration: "16 weeks",
    location: "Hybrid",
    prerequisites: ["virtual reality"],
    syllabus: [
      {
        week: 1,
        topic: "Mrs",
        content:
          "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
      },
    ],
    students: [
      {
        id: 42,
        name: "Ingmar Thurlow",
        email: "rharriot15@people.com.cn",
      },
    ],
  },
  {
    id: 23,
    name: "Computer Architecture",
    instructor: "Abagael Franchioni",
    description:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    enrollmentStatus: "In Progress",
    thumbnail: "https://robohash.org/eosetrerum.png?size=50x50&set=set1",
    duration: "16 weeks",
    location: "In-Person",
    prerequisites: ["cloud computing"],
    syllabus: [
      {
        week: 1,
        topic: "Mrs",
        content:
          "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      },
      {
        week: 2,
        topic: "Dr",
        content:
          "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
      },
    ],
    students: [
      { id: 6, name: "Kip Corroyer", email: "kjako5@bandcamp.com" },

      { id: 10, name: "Daune Limer", email: "aconnett9@edublogs.org" },

      {
        id: 15,
        name: "Maribeth Halling",
        email: "kwixeye@timesonline.co.uk",
      },

      { id: 23, name: "Laney Swapp", email: "cturfesm@soup.io" },
    ],
  },
  {
    id: 24,
    name: "Big Data Analytics",
    instructor: "Grover Linforth",
    description:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    enrollmentStatus: "Open",
    thumbnail: "https://robohash.org/autvoluptatibuset.png?size=50x50&set=set1",
    duration: "16 weeks",
    location: "Hybrid",
    prerequisites: ["mobile development"],
    syllabus: [
      {
        week: 1,
        topic: "Dr",
        content: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
      },
      {
        week: 2,
        topic: "Ms",
        content:
          "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      },
      {
        week: 3,
        topic: "Ms",
        content:
          "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      },
      {
        week: 4,
        topic: "Honorable",
        content:
          "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
      },
    ],
    students: [
      {
        id: 17,
        name: "Bendite Le Hucquet",
        email: "inatong@huffingtonpost.com",
      },

      {
        id: 37,
        name: "Robinetta Medcraft",
        email: "jshurey10@indiatimes.com",
      },
    ],
  },
  {
    id: 25,
    name: "Information Retrieval",
    instructor: "Fitz Bartlomieczak",
    description: "In congue. Etiam justo. Etiam pretium iaculis justo.",
    enrollmentStatus: "In Progress",
    thumbnail:
      "https://robohash.org/exercitationemporropariatur.png?size=50x50&set=set1",
    duration: "16 weeks",
    location: "Online",
    prerequisites: ["machine learning"],
    syllabus: [
      {
        week: 1,
        topic: "Mrs",
        content:
          "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      },
    ],
    students: [
      { id: 20, name: "Lola Lavrick", email: "bmcdonaghj@harvard.edu" },

      { id: 27, name: "Cami Stuckford", email: "bnaultyq@ocn.ne.jp" },

      { id: 40, name: "Allix Webland", email: "lrickerd13@godaddy.com" },

      {
        id: 47,
        name: "Jordain Oats",
        email: "dtremollet1a@soundcloud.com",
      },
    ],
  },
  {
    id: 26,
    name: "Augmented Reality",
    instructor: "Aubrie Galle",
    description:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://robohash.org/ducimusveniamaccusamus.png?size=50x50&set=set1",
    duration: "4 weeks",
    location: "In-Person",
    prerequisites: ["machine learning"],
    syllabus: [
      {
        week: 1,
        topic: "Honorable",
        content: "In congue. Etiam justo. Etiam pretium iaculis justo.",
      },
    ],
    students: [],
  },
  {
    id: 27,
    name: "Data Structures and Algorithms",
    instructor: "Del Warrener",
    description:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://robohash.org/sequiquiaconsequatur.png?size=50x50&set=set1",
    duration: "8 weeks",
    location: "Hybrid",
    prerequisites: ["bioinformatics"],
    syllabus: [
      {
        week: 1,
        topic: "Ms",
        content:
          "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      },
      {
        week: 2,
        topic: "Mr",
        content:
          "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      },
      {
        week: 3,
        topic: "Mr",
        content:
          "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      },
      {
        week: 4,
        topic: "Mr",
        content:
          "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      },
    ],
    students: [
      { id: 36, name: "Bellanca Hurdidge", email: "smalzardz@google.com" },
    ],
  },
  {
    id: 28,
    name: "Human-Computer Interaction",
    instructor: "Vikky Reiglar",
    description:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://robohash.org/reiciendismolestiassit.png?size=50x50&set=set1",
    duration: "8 weeks",
    location: "In-Person",
    prerequisites: ["bioinformatics"],
    syllabus: [
      {
        week: 1,
        topic: "Rev",
        content:
          "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      },
      {
        week: 2,
        topic: "Mr",
        content:
          "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      },
      {
        week: 3,
        topic: "Mr",
        content:
          "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      },
    ],
    students: [
      {
        id: 56,
        name: "Dacia Darridon",
        email: "ebertomier1j@redcross.org",
      },
    ],
  },
  {
    id: 29,
    name: "Human-Computer Interaction",
    instructor: "Elspeth Dewsbury",
    description:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    enrollmentStatus: "Closed",
    thumbnail: "https://robohash.org/beataemagniatque.png?size=50x50&set=set1",
    duration: "8 weeks",
    location: "Hybrid",
    prerequisites: ["machine learning"],
    syllabus: [
      {
        week: 1,
        topic: "Mr",
        content:
          "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      },
      {
        week: 2,
        topic: "Mrs",
        content:
          "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      },
    ],
    students: [],
  },
  {
    id: 30,
    name: "Augmented Reality",
    instructor: "Pieter Kieff",
    description:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    enrollmentStatus: "Closed",
    thumbnail: "https://robohash.org/eoslaboriosamsunt.png?size=50x50&set=set1",
    duration: "16 weeks",
    location: "Online",
    prerequisites: ["computer graphics", "augmented reality"],
    syllabus: [
      {
        week: 1,
        topic: "Ms",
        content:
          "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      },
      {
        week: 2,
        topic: "Ms",
        content:
          "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      },
      {
        week: 3,
        topic: "Mr",
        content:
          "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      },
      {
        week: 4,
        topic: "Dr",
        content:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
      },
      {
        week: 5,
        topic: "Mr",
        content:
          "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      },
    ],
    students: [
      { id: 7, name: "Ly Hail", email: "bord6@yahoo.co.jp" },

      { id: 13, name: "Joey Mattiessen", email: "pchivertonc@nifty.com" },

      { id: 20, name: "Lola Lavrick", email: "bmcdonaghj@harvard.edu" },

      {
        id: 30,
        name: "Zolly Wooderson",
        email: "ahaddestont@plala.or.jp",
      },

      { id: 33, name: "Jeniece Lucchi", email: "bgradleyw@elpais.com" },

      {
        id: 37,
        name: "Robinetta Medcraft",
        email: "jshurey10@indiatimes.com",
      },

      {
        id: 76,
        name: "Aldridge Gillon",
        email: "aglendenning23@theatlantic.com",
      },
    ],
  },
  {
    id: 31,
    name: "Machine Learning",
    instructor: "Tyrone Bowcher",
    description:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    enrollmentStatus: "In Progress",
    thumbnail: "https://robohash.org/eosquosunt.png?size=50x50&set=set1",
    duration: "8 weeks",
    location: "Hybrid",
    prerequisites: ["augmented reality"],
    syllabus: [
      {
        week: 1,
        topic: "Ms",
        content:
          "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
      },
    ],
    students: [
      {
        id: 80,
        name: "Willie Vince",
        email: "nmenure27@independent.co.uk",
      },
    ],
  },
  {
    id: 32,
    name: "Robotics",
    instructor: "Coleman Abramowitch",
    description:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    enrollmentStatus: "In Progress",
    thumbnail: "https://robohash.org/nequesitdolores.png?size=50x50&set=set1",
    duration: "16 weeks",
    location: "In-Person",
    prerequisites: ["virtual reality", "algorithms"],
    syllabus: [
      {
        week: 1,
        topic: "Honorable",
        content:
          "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
      },
      {
        week: 2,
        topic: "Honorable",
        content:
          "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
      },
      {
        week: 3,
        topic: "Rev",
        content:
          "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      },
      {
        week: 4,
        topic: "Honorable",
        content:
          "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
      },
    ],
    students: [],
  },
  {
    id: 33,
    name: "Introduction to Algorithms",
    instructor: "Kathrine Benion",
    description:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    enrollmentStatus: "In Progress",
    thumbnail:
      "https://robohash.org/utasperioresmolestias.png?size=50x50&set=set1",
    duration: "4 weeks",
    location: "Hybrid",
    prerequisites: ["internet of things", "blockchain"],
    syllabus: [
      {
        week: 1,
        topic: "Mr",
        content:
          "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      },
      {
        week: 2,
        topic: "Mrs",
        content:
          "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
      },
      {
        week: 3,
        topic: "Mr",
        content:
          "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      },
    ],
    students: [
      { id: 38, name: "Lorraine Tims", email: "dgiovanardi11@ehow.com" },

      {
        id: 47,
        name: "Jordain Oats",
        email: "dtremollet1a@soundcloud.com",
      },

      {
        id: 59,
        name: "Dolly Casina",
        email: "spenrice1m@nydailynews.com",
      },

      { id: 67, name: "Lynn MacCallion", email: "ckaiser1u@seesaa.net" },
    ],
  },
  {
    id: 34,
    name: "Web Development",
    instructor: "Lurlene Trye",
    description:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    enrollmentStatus: "Closed",
    thumbnail:
      "https://robohash.org/delenitiaspernatureos.png?size=50x50&set=set1",
    duration: "8 weeks",
    location: "In-Person",
    prerequisites: ["computer vision", "computer architecture"],
    syllabus: [
      {
        week: 1,
        topic: "Mr",
        content:
          "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
      },
      {
        week: 2,
        topic: "Ms",
        content:
          "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      },
      {
        week: 3,
        topic: "Mr",
        content:
          "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      },
    ],
    students: [
      { id: 21, name: "Delila Peppard", email: "djaumek@msu.edu" },

      {
        id: 31,
        name: "Michelina Kharchinski",
        email: "mmarkussenu@sakura.ne.jp",
      },
    ],
  },
  {
    id: 35,
    name: "Natural Language Processing",
    instructor: "Nikolai Sommerly",
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    enrollmentStatus: "In Progress",
    thumbnail:
      "https://robohash.org/itaquevoluptasipsum.png?size=50x50&set=set1",
    duration: "8 weeks",
    location: "In-Person",
    prerequisites: ["algorithms", "game development"],
    syllabus: [
      {
        week: 1,
        topic: "Honorable",
        content:
          "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      },
      {
        week: 2,
        topic: "Mrs",
        content:
          "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      },
      {
        week: 3,
        topic: "Ms",
        content:
          "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      },
    ],
    students: [
      { id: 7, name: "Ly Hail", email: "bord6@yahoo.co.jp" },

      { id: 13, name: "Joey Mattiessen", email: "pchivertonc@nifty.com" },

      { id: 22, name: "Maddi Arnoldi", email: "ashaddockl@jugem.jp" },

      {
        id: 36,
        name: "Bellanca Hurdidge",
        email: "smalzardz@google.com",
      },

      {
        id: 42,
        name: "Ingmar Thurlow",
        email: "rharriot15@people.com.cn",
      },
    ],
  },
  {
    id: 36,
    name: "Machine Learning",
    instructor: "Andrej Baraclough",
    description:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    enrollmentStatus: "Closed",
    thumbnail:
      "https://robohash.org/adipiscinullaoccaecati.png?size=50x50&set=set1",
    duration: "8 weeks",
    location: "In-Person",
    prerequisites: ["algorithms", "networking"],
    syllabus: [
      {
        week: 1,
        topic: "Mrs",
        content:
          "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
      },
      {
        week: 2,
        topic: "Mrs",
        content:
          "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
      },
      {
        week: 3,
        topic: "Dr",
        content:
          "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      },
    ],
    students: [
      { id: 52, name: "Rosabelle Cudd", email: "blehrle1f@sbwire.com" },
      {
        id: 53,
        name: "Whitaker Redshaw",
        email: "cdebrett1g@google.com.br",
      },
    ],
  },
  {
    id: 37,
    name: "Internet of Things",
    instructor: "Fons Battle",
    description:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    enrollmentStatus: "Closed",
    thumbnail: "https://robohash.org/autemodioquia.png?size=50x50&set=set1",
    duration: "8 weeks",
    location: "Hybrid",
    prerequisites: ["augmented reality", "web development"],
    syllabus: [
      {
        week: 1,
        topic: "Mrs",
        content:
          "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
      },
      {
        week: 2,
        topic: "Dr",
        content:
          "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
      },
      {
        week: 3,
        topic: "Ms",
        content:
          "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
      },
    ],
    students: [
      { id: 11, name: "August McKerron", email: "ttrasea@comsenz.com" },

      {
        id: 16,
        name: "Florencia Spafford",
        email: "rlockittf@theglobeandmail.com",
      },

      {
        id: 34,
        name: "Leann Brackpool",
        email: "idinningtonx@hatena.ne.jp",
      },
    ],
  },
  {
    id: 38,
    name: "Cloud Computing",
    instructor: "Millicent De Mico",
    description:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    enrollmentStatus: "Closed",
    thumbnail: "https://robohash.org/etpraesentiumet.png?size=50x50&set=set1",
    duration: "8 weeks",
    location: "Hybrid",
    prerequisites: ["natural language processing"],
    syllabus: [],
    students: [
      {
        id: 35,
        name: "Gayleen Basden",
        email: "pmacpadeny@yellowbook.com",
      },
    ],
  },
  {
    id: 39,
    name: "Artificial Intelligence",
    instructor: "George Batter",
    description:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    enrollmentStatus: "Closed",
    thumbnail:
      "https://robohash.org/voluptatemminimadoloremque.png?size=50x50&set=set1",
    duration: "8 weeks",
    location: "Online",
    prerequisites: ["computer graphics", "game development"],
    syllabus: [
      {
        week: 1,
        topic: "Dr",
        content:
          "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      },
      {
        week: 2,
        topic: "Honorable",
        content:
          "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
      },
      {
        week: 3,
        topic: "Honorable",
        content:
          "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      },
      {
        week: 4,
        topic: "Mrs",
        content:
          "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      },
    ],
    students: [],
  },
  {
    id: 40,
    name: "Data Structures and Algorithms",
    instructor: "Stinky Losbie",
    description:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    enrollmentStatus: "In Progress",
    thumbnail:
      "https://robohash.org/voluptateverovoluptatem.png?size=50x50&set=set1",
    duration: "4 weeks",
    location: "Online",
    prerequisites: ["artificial intelligence"],
    syllabus: [
      {
        week: 1,
        topic: "Mr",
        content:
          "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      },
    ],
    students: [
      { id: 28, name: "Bobbi Harlick", email: "bnoddler@people.com.cn" },

      { id: 39, name: "Sawyere Raccio", email: "dantecki12@state.tx.us" },

      { id: 57, name: "Claresta Pittoli", email: "mpepon1k@ibm.com" },
    ],
  },
];

export default coursesData;
