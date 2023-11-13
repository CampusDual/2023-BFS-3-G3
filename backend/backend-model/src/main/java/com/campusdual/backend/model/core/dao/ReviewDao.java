package com.campusdual.backend.model.core.dao;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

@Lazy
@Repository(value = "ReviewDao")
@ConfigurationFile(
        configurationFile = "dao/ReviewDao.xml",
        configurationFilePlaceholder = "dao/placeholders.properties")

public class ReviewDao extends OntimizeJdbcDaoSupport {
    public static final String ID = "reviewid";
    public static final String CONTENT = "content";
    public static final String RATE = "rate";
    public static final String DATE = "date";
    public static final String USER_ = "user_";
    public static final String GYMID = "gymid";

}
