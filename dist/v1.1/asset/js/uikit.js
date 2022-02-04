const M_receiptFormDateTime = ({
  receipt,
  setReceipt
}) => {
  let initValue = receipt.datetime;
  return /*#__PURE__*/React.createElement("div", {
    className: "m-receiptForm -dateTime"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "form_dateTime"
  }, "\uACB0\uC81C\uC2DC\uAC04"), /*#__PURE__*/React.createElement("div", {
    className: "m-receiptForm__inputs"
  }, /*#__PURE__*/React.createElement("input", {
    type: "datetime-local",
    id: "form_dateTime",
    defaultValue: initValue,
    onChange: e => {
      setReceipt({
        datetime: e.target.value
      });
    }
  })));
};

const M_receiptFormStore = ({
  receipt,
  setReceipt
}) => {
  let initValue = receipt.store || "";
  return /*#__PURE__*/React.createElement("div", {
    className: "m-receiptForm -store"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "form_store"
  }, "\uC0AC\uC6A9\uCC98"), /*#__PURE__*/React.createElement("div", {
    className: "m-receiptForm__inputs"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "form_store",
    defaultValue: initValue,
    onChange: e => {
      setReceipt({
        store: e.target.value
      });
    }
  })));
};

const M_receiptFormPrice = ({
  receipt,
  setReceipt
}) => {
  let initValue = receipt.price || "";
  return /*#__PURE__*/React.createElement("div", {
    className: "m-receiptForm -price"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "form_price"
  }, "\uAE08\uC561"), /*#__PURE__*/React.createElement("div", {
    className: "m-receiptForm__inputs"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    id: "form_price",
    defaultValue: initValue,
    onChange: e => {
      setReceipt({
        price: e.target.value
      });
    }
  })));
};

const M_receiptFormMethod = ({
  receipt,
  setReceipt
}) => {
  let initValue = receipt.method || "";
  return /*#__PURE__*/React.createElement("div", {
    className: "m-receiptForm -method"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "form_method"
  }, "\uACB0\uC81C\uC218\uB2E8"), /*#__PURE__*/React.createElement("div", {
    className: "m-receiptForm__inputs"
  }, /*#__PURE__*/React.createElement("select", {
    onChange: e => {
      setReceipt({
        method: e.target.value
      });
    },
    defaultValue: initValue
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\uACB0\uC81C\uC218\uB2E8 \uC120\uD0DD\uD558\uAE30"), /*#__PURE__*/React.createElement("option", {
    value: "\uD604\uAE08"
  }, "\uD604\uAE08"), /*#__PURE__*/React.createElement("option", {
    value: "\uAD6D\uBBFC\uBD09\uC62C\uB9BC"
  }, "\uAD6D\uBBFC\uCE74\uB4DC - \uBD09\uC62C\uB9BC"), /*#__PURE__*/React.createElement("option", {
    value: "\uAD6D\uBBFC\uB9C8\uC62C\uB9BC"
  }, "\uAD6D\uBBFC\uCE74\uB4DC - \uB9C8\uC62C\uB9BC"), /*#__PURE__*/React.createElement("option", {
    value: "\uD604\uB300\uC2A4\uB9C8\uC77C"
  }, "\uD604\uB300\uCE74\uB4DC - \uC2A4\uB9C8\uC77C"), /*#__PURE__*/React.createElement("option", {
    value: "\uAE40\uD3EC\uD398\uC774"
  }, "\uAE40\uD3EC\uD398\uC774"), /*#__PURE__*/React.createElement("option", {
    value: "\uB124\uC774\uBC84\uD398\uC774"
  }, "\uB124\uC774\uBC84\uD398\uC774"), /*#__PURE__*/React.createElement("option", {
    value: "\uCE74\uCE74\uC624\uD398\uC774"
  }, "\uCE74\uCE74\uC624\uD398\uC774"), /*#__PURE__*/React.createElement("option", {
    value: "\uACC4\uC88C\uC774\uCCB4"
  }, "\uACC4\uC88C\uC774\uCCB4"))));
};

const M_receiptFormComment = ({
  receipt,
  setReceipt
}) => {
  let initValue = receipt.comment || "";
  return /*#__PURE__*/React.createElement("div", {
    className: "m-receiptForm -comment"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "form_comment"
  }, "\uC0C1\uC138\uB0B4\uC5ED"), /*#__PURE__*/React.createElement("div", {
    className: "m-receiptForm__inputs"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "form_comment",
    defaultValue: initValue,
    onChange: e => {
      setReceipt({
        comment: e.target.value
      });
    }
  })));
};

const M_receiptFormTag = ({
  receipt,
  setReceipt
}) => {
  console.log(receipt);
  let initValue = receipt.tag.split("/")[0] || "";
  let initSubTag = receipt.tag.split("/")[1] || "";
  [subTagsDOM, setSubTagsDOM] = React.useState( /*#__PURE__*/React.createElement(M_receiptFormSubTag, {
    receipt: receipt,
    setReceipt: setReceipt
  })); // 상태 관리용 HOOK

  const changeTag = function (value) {
    setReceipt(value);
    setSubTagsDOM( /*#__PURE__*/React.createElement(M_receiptFormSubTag, {
      receipt: receipt,
      setReceipt: setReceipt
    }));
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "m-receiptForm -tag"
  }, /*#__PURE__*/React.createElement("label", null, "\uC9C0\uCD9C\uD56D\uBAA9"), /*#__PURE__*/React.createElement("div", {
    className: "m-receiptForm__tags"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: "tag",
    value: "\uACE0\uC815",
    onChange: e => {
      changeTag({
        tag: e.target.value
      });
    },
    defaultChecked: initValue == "고정"
  }), " ", /*#__PURE__*/React.createElement("span", {
    className: "a-tag -f"
  }, "\uACE0\uC815")), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: "tag",
    value: "\uD544\uC218",
    onChange: e => {
      changeTag({
        tag: e.target.value
      });
    },
    defaultChecked: initValue == "필수"
  }), " ", /*#__PURE__*/React.createElement("span", {
    className: "a-tag -r"
  }, "\uD544\uC218")), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: "tag",
    value: "\uBCC0\uB3D9",
    onChange: e => {
      changeTag({
        tag: e.target.value
      });
    },
    defaultChecked: initValue == "변동"
  }), " ", /*#__PURE__*/React.createElement("span", {
    className: "a-tag -c"
  }, "\uBCC0\uB3D9")), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: "tag",
    value: "\uAE30\uD0C0",
    onChange: e => {
      changeTag({
        tag: e.target.value
      });
    },
    defaultChecked: initValue == "기타"
  }), " ", /*#__PURE__*/React.createElement("span", {
    className: "a-tag -o"
  }, "\uAE30\uD0C0")))), subTagsDOM);
};

const M_receiptFormSubTag = ({
  receipt,
  setReceipt
}) => {
  console.log(receipt);
  let initTag = receipt.tag.split("/")[0] || "";
  /*
  let initSubTag = (receipt.tag).split("/")[1] || "";
  let subTags = {
      "":[],
      "고정":["세금","교육"],
      "필수":["식재료","생활필수품"],
      "변동":["외식비","의료비","문화,여행"],
      "기타":["미용,패션","가구,가전","그외,뭐지"]
  };
  
  let [subTag,setSubTag] = React.useState( subTags[initTag] ); // 상태 관리용 HOOK
    const changeTag = function(value){
      subTags[initTag].map(function(subtag,index){
          return (<div key={index}>{subtag}</div>);
      });
      setReceipt(value);
  };
  */

  return /*#__PURE__*/React.createElement("div", {
    className: "m-receiptForm -tag"
  }, /*#__PURE__*/React.createElement("label", null, "\uC138\uBD80\uC9C0\uCD9C\uD56D\uBAA9"), /*#__PURE__*/React.createElement("div", {
    className: "m-receiptForm__tags"
  }, initTag));
};
/*
고정/세금
고정/공과금
고정/보험
고정/용돈
고정/교육
고정/통신
필수/식재료
필수/생활필수품
필수/대중교통
필수/경조사
변동/외식비
변동/의료비
변동/문화,여행
변동/자동차,택시
기타/미용,패션
기타/가구,가전
기타/그외,뭐지

*/


const S_nowMonthTotal = ({
  receipts
}) => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(C_monthTotal, {
    receipts: receipts
  }), /*#__PURE__*/React.createElement("div", {
    className: "-writeBtn"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/v1.1/create/",
    className: "a-btn -l"
  }, "\uC0C8\uB85C\uB4F1\uB85D"), /*#__PURE__*/React.createElement("a", {
    href: "/v1.1/update/",
    className: "a-btn -l"
  }, "\uBD99\uC5EC\uB123\uAE30")));
};

const C_monthTotal = ({
  receipts
}) => {
  let monthTotal = 0;
  const tagTotal = {
    f: 0,
    r: 0,
    c: 0,
    o: 0
  };

  for (receipt of receipts) {
    tagTotal[getTagCode(receipt.tag)] += receipt.price;
    monthTotal += receipt.price;
  }

  ;
  return /*#__PURE__*/React.createElement("article", {
    className: "c-monthTotal"
  }, /*#__PURE__*/React.createElement("h2", null, "2022\uB144 1\uC6D4 \uC9C0\uCD9C\uAE08\uC561"), /*#__PURE__*/React.createElement("details", null, /*#__PURE__*/React.createElement("summary", null, /*#__PURE__*/React.createElement("span", {
    className: "a-price -xl"
  }, monthTotal.toLocaleString())), /*#__PURE__*/React.createElement("ul", {
    className: "m-tagByTotal"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("label", {
    className: "a-tag -f"
  }, "\uACE0\uC815"), " ", /*#__PURE__*/React.createElement("span", {
    className: "a-price"
  }, tagTotal.f.toLocaleString())), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("label", {
    className: "a-tag -r"
  }, "\uD544\uC218"), " ", /*#__PURE__*/React.createElement("span", {
    className: "a-price"
  }, tagTotal.r.toLocaleString())), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("label", {
    className: "a-tag -c"
  }, "\uBCC0\uB3D9"), " ", /*#__PURE__*/React.createElement("span", {
    className: "a-price"
  }, tagTotal.c.toLocaleString())), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("label", {
    className: "a-tag -o"
  }, "\uAE30\uD0C0"), " ", /*#__PURE__*/React.createElement("span", {
    className: "a-price"
  }, tagTotal.o.toLocaleString())))));
};

const S_receiptsUpdateForm = ({
  _receipt,
  receiptIdx
}) => {
  let receipt, setReceiptState;
  [receipt, setReceiptState] = React.useState(_receipt); // 상태 관리용 HOOK

  const setReceipt = function (updateData) {
    Object.assign(receipt, updateData);
    setReceiptState(receipt);
  };

  const updateReceipt = function () {
    receipt.useYn = "Y";
    uploadReceipt();
  };

  const book = function () {
    location.href = "/v1/book/";
    return false;
  };

  const deleteReceipt = function () {
    if (confirm("삭제하시겠습니까?")) {
      receipt.useYn = "N";
      uploadReceipt();
    }

    ;
  };

  const uploadReceipt = function () {
    firebase.database().ref(getReceiptsUrl(receiptIdx)).set(receipt);
    location.href = "/v1/book/";
    return false;
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(M_receiptFormDateTime, {
    receipt: Receipt,
    setReceipt: setReceipt
  }), /*#__PURE__*/React.createElement(M_receiptFormStore, {
    receipt: Receipt,
    setReceipt: setReceipt
  }), /*#__PURE__*/React.createElement(M_receiptFormPrice, {
    receipt: Receipt,
    setReceipt: setReceipt
  }), /*#__PURE__*/React.createElement(M_receiptFormMethod, {
    receipt: Receipt,
    setReceipt: setReceipt
  }), /*#__PURE__*/React.createElement(M_receiptFormComment, {
    receipt: Receipt,
    setReceipt: setReceipt
  }), /*#__PURE__*/React.createElement(M_receiptFormTag, {
    receipt: Receipt,
    setReceipt: setReceipt
  }), /*#__PURE__*/React.createElement("div", {
    className: "m-btnsWrap"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "a-btn -d",
    onClick: deleteReceipt
  }, "\uC0AD\uC81C"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "a-btn -c",
    onClick: book
  }, "\uBAA9\uB85D"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "a-btn -s",
    onClick: updateReceipt
  }, "\uC218\uC815")));
};

const S_receiptsCreateForm = ({
  _receipt,
  receiptIdx
}) => {
  let receipt, setReceiptState;
  [receipt, setReceiptState] = React.useState(_receipt); // 상태 관리용 HOOK

  const setReceipt = function (updateData) {
    Object.assign(receipt, updateData);
    console.log(receipt);
    setReceiptState(receipt);
  };

  const initReceipt = function () {
    receipt.idx = receiptIdx;
    firebase.database().ref(getReceiptsUrl(receiptIdx)).set(receipt);
    location.href = "/v1.1/book/";
    return false;
  };

  const book = function () {
    location.href = "/v1.1/book/";
    return false;
  };

  const pasteReceipt = function () {
    return false;
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(M_receiptFormDateTime, {
    receipt: receipt,
    setReceipt: setReceipt
  }), /*#__PURE__*/React.createElement(M_receiptFormStore, {
    receipt: receipt,
    setReceipt: setReceipt
  }), /*#__PURE__*/React.createElement(M_receiptFormPrice, {
    receipt: receipt,
    setReceipt: setReceipt
  }), /*#__PURE__*/React.createElement(M_receiptFormMethod, {
    receipt: receipt,
    setReceipt: setReceipt
  }), /*#__PURE__*/React.createElement(M_receiptFormComment, {
    receipt: receipt,
    setReceipt: setReceipt
  }), /*#__PURE__*/React.createElement(M_receiptFormTag, {
    receipt: receipt,
    setReceipt: setReceipt
  }), /*#__PURE__*/React.createElement("div", {
    className: "m-btnsWrap"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "a-btn -c",
    onClick: book
  }, "\uBAA9\uB85D"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "a-btn -s",
    onClick: initReceipt
  }, "\uC800\uC7A5")));
};

const S_receiptsList = ({
  receipts
}) => {
  const updateReceipt = function (idx) {
    location.href = "/v1/update/?idx=" + idx;
    return false;
  };

  const receiptList = receipts.map(function (receipt, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: index
    }, /*#__PURE__*/React.createElement("a", {
      onClick: updateReceipt.bind(this, receipt.idx)
    }, /*#__PURE__*/React.createElement(M_receipt, {
      receipt: receipt
    })));
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, receiptList);
};

const M_receipt = ({
  receipt
}) => {
  return /*#__PURE__*/React.createElement("article", {
    className: "m-receipt"
  }, /*#__PURE__*/React.createElement("span", {
    className: "a-date"
  }, getMonthDate(receipt.datetime)), /*#__PURE__*/React.createElement("div", {
    className: "-info"
  }, /*#__PURE__*/React.createElement("span", {
    className: "a-comment"
  }, receipt.comment), /*#__PURE__*/React.createElement("span", {
    className: "a-store"
  }, receipt.store), /*#__PURE__*/React.createElement("span", {
    className: "a-payment"
  }, receipt.method)), /*#__PURE__*/React.createElement("div", {
    className: "-price"
  }, /*#__PURE__*/React.createElement("strong", {
    className: "a-price"
  }, (receipt.price * 1).toLocaleString()), /*#__PURE__*/React.createElement("label", {
    className: "a-tag -" + getTagCode(receipt.tag)
  }, receipt.tag)));
};