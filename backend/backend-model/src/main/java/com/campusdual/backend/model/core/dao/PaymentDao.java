package com.campusdual.backend.model.core.dao;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;
@Lazy
@Repository(value = "PaymentDao")
@ConfigurationFile(
        configurationFile = "dao/PaymentDao.xml",
        configurationFilePlaceholder = "dao/placeholders.properties")
public class PaymentDao extends OntimizeJdbcDaoSupport {


        public static final String ID = "paymentid";
        public static final String HOLDER = "holder";
        public static final String CARDNUMBER = "cardnumber";
        public static final String EXPIRATION = "expiration";
        public static final String CVV = "cvv";
        public static final String INITIALDATE = "initialdate";
        public static final String USER_ = "user_";
        public static final String QUOTA = "quota";

    }


