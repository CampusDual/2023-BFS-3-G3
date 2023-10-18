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
    public static final String ADDRESS = "address";
    public static final String  CITY= "city";
    public static final String  CIF= "cif";
    public static final String  PHONE= "phone";
    public static final String  EMAIL= "email";
    public static final String  SCHEDULE= "schedule";
    public static final String  DESCRIPTION= "description";
    public static final String  STATE= "state";
    public static final String  USER_= "user_";
    public static final String  ATTR_PHOTO= "photo";
}
